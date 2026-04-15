const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true,
  })
);

sequelize.authenticate()
	.then(()=>{//Successful
	console.log("Successfully Authenticated");
	app.listen(port);
		sequelize.sync()
		.then(()=>{
			console.log("Successfully synced the model");
			 )
		.catch((err)=>{
		console.log("Unable to sync model:", err);
			
		}
	});
	.catch((err)=>{
		console.log("Could not authenticate:",err);
	});//.then is if results successful, you will see return if catch if there was an error 


function requireLogin(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/Quiz2/login"); // fixed: was "/login"
  }
}

app.set("view engine", "pug");
app.set("views", __dirname);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/Quiz1/quiz1", (req, res) => {
  res.render("Quiz1/quiz1"); // fixed: removed leading slash
});

app.get("/Quiz2/login", (req, res) => {
  res.render("Quiz2/login");
});

app.post("/Quiz2/login", (req, res) => {
  req.session.loggedIn = true;
  res.redirect("/Quiz2/quiz2Q");
});

app.get("/Quiz1/quiz1Q", (req, res) => {
  res.render("Quiz1/quiz1Q"); // fixed: removed leading slash
});

app.get("/Quiz2/quiz2Q", requireLogin, (req, res) => {
  res.render("Quiz2/quiz2Q"); // fixed: removed leading slash
});

app.get("/resourcepage", (req, res) => {
  res.render("resourcepage");
});

app.get("/FAdvisor", (req, res) => {
  res.render("FAdvisor");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

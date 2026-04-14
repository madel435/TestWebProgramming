const express = require("express");
const app = express();
const path = require("path");

const session = require("express-session");

app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true,
  })
);
function requireLogin(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
}


// Tell Express to use Pug
app.set("view engine", "pug");
app.set("views", __dirname);


// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Knowledge quiz intro page
app.get("/quiz1", (req, res) => {
  res.render("quiz1");
});
// LOGIN PAGE
app.get("/login", (req, res) => {
  res.render("login");
});

// LOGIN HANDLER
app.post("/login", (req, res) => {
  req.session.loggedIn = true;
  res.redirect("/quiz2Q");
});

// First quiz question (example)
app.get("/quiz1Q", (req, res) => {
  res.render("quiz1Q");
});

// Protected route: quiz2 results/page
app.get("/quiz2Q", requireLogin, (req, res) => {
  res.render("quiz2Q");
});

// Resource page
app.get("/resourcepage", (req, res) => {
  res.render("resourcepage");
});

app.get("/FAdvisor", (req, res) => {
  res.render("FAdvisor");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

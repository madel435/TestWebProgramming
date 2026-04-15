const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');

const Username = sequelize.define('username',{
 id : { //must minimun defined type
  type: Sequelize.STRING,
   primaryKey: //primary method on which you would access
   autoIncrement: true; //we auto goes up if false then we have to figure out how it assigns
   allowNull:false
 };//used to identift them

firstName : {
type: Sequelize.STRING,
allowNull :false
},//now go from null to not null; must set up properties for these objects

lastName : {
  type: Sequelize.STRING,
  allowNull:false;
},

age : {
  type: Sequelize.INTEGER,
  allowNull: false
},
email:{ 
  type: Sequelize.INTEGER,
  allowNull: false                           
});//defined model convention captial S //create the student


//Info stored in card
Card.belongsTo(Student);
Student.hasOne(Card);

//Card.hasOne(Student);

//Info stored in student 
Student.belongsTo(Card)
//Another way to put it 
module.exports = Card; //ecporets

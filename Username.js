const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');

const Username = sequelize.define('Username',{
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

module.exports = Student; //ecporets

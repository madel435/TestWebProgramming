const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_adelstonem2_default','my.adelstonem2','PASS'{
host:'127.0.0.1'
dialect:'mysql'
});

module.exports = sequelize;

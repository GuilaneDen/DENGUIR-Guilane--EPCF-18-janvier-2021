const Sequelize = require("sequelize");

const sequelize = new Sequelize('people', 'root', 'password', { 
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
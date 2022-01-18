const Sequelize = require("sequelize");

const sequelize = require('./database');

const People = sequelize.define('people', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    gender: Sequelize.STRING,
    country: Sequelize.STRING,
});

module.exports = People;
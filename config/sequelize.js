const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host:process.env.MYSQL_HOSTNAME ?? 'localhost',
    dialect:'mysql'
});

module.exports = {sequelize, DataTypes};
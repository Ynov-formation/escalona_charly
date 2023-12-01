const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize').sequelize;

const Account = sequelize.define('Account', {
  account_balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:0,
  },
  account_number: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  account_pass: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Account',
});

module.exports = Account;
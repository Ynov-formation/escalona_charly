const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize').sequelize;

const BankTransaction = sequelize.define('BankTransaction', {
  account_id: {
    type: sequelize.DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'bank_transactions',
});

module.exports = BankTransaction;
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize').sequelize;
const Account = require('./Account');

const Customer = sequelize.define('Customer', {
  lastname:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  account_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'customers',
});

// Définissez la relation "one-to-one"
Customer.belongsTo(Account, { foreignKey: 'account_id' });
Account.hasOne(Customer, { foreignKey: 'account_id' });

module.exports = Customer;
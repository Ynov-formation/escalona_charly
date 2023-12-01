'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bank_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      amount: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      transaction_type: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      sender_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      receiver_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    });


    await queryInterface.addIndex('bank_transactions', ['sender_id']);
    await queryInterface.addIndex('bank_transactions', ['receiver_id']);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bank_transactions');
  }
};
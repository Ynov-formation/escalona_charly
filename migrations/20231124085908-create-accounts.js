module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:  Sequelize.DataTypes.INTEGER
      },
      account_balance: {
        allowNull: false,
        type:  Sequelize.DataTypes.INTEGER,
        defaultValue: 0
      },
      account_number: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
      account_pass: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type:  Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type:  Sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};
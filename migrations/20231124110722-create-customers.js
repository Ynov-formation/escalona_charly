module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      lastname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      account_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'accounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });



  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  },
};
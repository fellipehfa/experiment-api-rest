module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'pictures',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        original_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        file_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        student_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'students',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('pictures');
  },
};

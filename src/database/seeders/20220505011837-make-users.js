const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Fellipe',
          email: 'fellipe@email.com',
          password_hash: bcryptjs.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Baiana',
          email: 'baiana@email.com',
          password_hash: bcryptjs.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rael',
          email: 'Rael@email.com',
          password_hash: bcryptjs.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down() {},
};

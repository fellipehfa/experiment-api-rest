const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          first_name: 'Joe',
          last_name: 'Tribiani',
          age: 30,
          weight: 85,
          height: 1.78,
          email: 'joe@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Phoebe',
          last_name: 'Buffay',
          age: 30,
          weight: 62,
          height: 1.74,
          email: 'phoebe@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Chandler',
          last_name: 'Bing',
          age: 31,
          weight: 82,
          height: 1.85,
          email: 'chandler@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Monica',
          last_name: 'Geller',
          age: 29,
          weight: 58,
          height: 1.68,
          email: 'monica@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Rachel',
          last_name: 'Green',
          age: 29,
          weight: 57,
          height: 1.67,
          email: 'rachel@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Ross',
          last_name: 'Geller',
          age: 32,
          weight: 87,
          height: 1.87,
          email: 'roos@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down() {},
};

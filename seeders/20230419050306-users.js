'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [{
      name: 'user1',
      age: '29',
      gender: 'male',
      phNo:'7675675424',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'user2',
      age: '25',
      gender: 'male',
      phNo:'7675675423',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'user3',
      age: '28',
      gender: 'female',
      phNo:'7675675422',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'user4',
      age: '25',
      gender: 'male',
      phNo:'7675675411',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'user5',
      age: '25',
      gender: 'male',
      phNo:'7675675420',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {});
  }
};

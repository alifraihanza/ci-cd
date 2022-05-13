'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_game', [
      {
        nama_pengguna: "dikaUYE",
        kata_sandi: "dikdik",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
    
        nama_pengguna: "paul",
        kata_sandi: "paulll",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
       
        nama_pengguna: "JONS",
        kata_sandi: "hardian",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        
        nama_pengguna: "ilham",
        kata_sandi: "jenjen",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        
        nama_pengguna: "queen",
        kata_sandi: "barbie",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_game', null, { truncate: true, restartIdentity: true });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

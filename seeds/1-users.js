
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "Richter Belmont", password: "$2a$10$3n2d08B6Bc1hNFllRDgaT.eK5Hjm62O/.LYBKq9V07FCEFYhoFNM6", is_admin: "0", oauth_provider: "NULL", oauth_id: "NULL" },
      ]);
    });
};

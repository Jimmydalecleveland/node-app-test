
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "Richter Belmont", password: "$2a$10$3n2d08B6Bc1hNFllRDgaT.eK5Hjm62O/.LYBKq9V07FCEFYhoFNM6", is_admin: "0", oauth_provider: "NULL", oauth_id: "NULL" },
        {id: 2, username: "Dracula", password: "$2a$10$dE91PaFgzZn.0TA3/EEQXeXHwZrHOQLnpJuk.kBZ/5.f/c1tNeHmq", is_admin: "1", oauth_provider: "NULL", oauth_id: "NULL" },
        {id: 3, username: "Alucard", password: "$2a$10$dE91PaFgzZn.0TA3/EEQXeXHwZrHOQLnpJuk.kBZ/5.f/c1tNeHmq", is_admin: "0", oauth_provider: "NULL", oauth_id: "NULL" }
      ]);
    });
};

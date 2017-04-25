
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, text: 'You STEEL mens SOULS, and make them your SLAVES!', user_id: '2'},        
        {id: 2, text: 'What is a man!?', user_id: '1'},
        {id: 3, text: 'A miserable little PILE of SECRETS!', user_id: '2'}
      ]);
    });
};

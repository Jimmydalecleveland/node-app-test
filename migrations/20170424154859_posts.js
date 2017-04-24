
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE posts (
      id mediumint(9) NOT NULL AUTO_INCREMENT,
      text varchar(200) NOT NULL,
      user_id mediumint(9) NOT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

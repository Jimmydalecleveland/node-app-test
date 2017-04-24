
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users (
      id int(10) unsigned NOT NULL AUTO_INCREMENT,
      username varchar(45) NOT NULL,
      password varchar(500) NOT NULL,
      is_admin tinyint(4) NOT NULL DEFAULT '0',
      oauth_provider varchar(255) DEFAULT NULL,
      oauth_id varchar(255) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

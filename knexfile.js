module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "asdf",
      database: "production",
    }
  },
  production: {
    client: "mysql",
    connection: {
      host: "138.197.200.20",
      port: "/var/run/mysqld/mysqld.sock",
      user: "deploy",
      password: "climh4zard",
      database: "production",
    }
  }
}

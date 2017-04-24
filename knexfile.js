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
      host: "production",
      user: "root",
      password: "climh4zard",
      database: "production",
    }
  }
}

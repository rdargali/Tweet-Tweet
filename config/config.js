module.exports = {
  development: {
    username: "jryulqlv",
    password: "cWgCI1evao3GTdChTOdGg--oMKXrEs3x",
    database: "jryulqlv",
    host: "salt.db.elephantsql.com",
    dialect: "postgres"  },
  
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres"  }
 }
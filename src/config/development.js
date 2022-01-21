module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
  CLIENT_ID_GMAIL: process.env.CLIENT_ID_GMAIL,
  CLIENT_SECRET_GMAIL: process.env.CLIENT_SECRET_GMAIL,
  REDIRECT_URI_GMAIL: process.env.REDIRECT_URI_GMAIL,
  REFRESH_TOKEN_GMAIL: process.env.REFRESH_TOKEN_GMAIL,
};

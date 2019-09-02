module.exports = {
  PORT: process.env.PORT || 3100,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL:
    process.env.DB_URL || 'postgresql://dunder-mifflin@localhost/occasions'
};

require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    }
  },

   pool: {
     min: 2,
     max: 10
   },
   migrations: {
     tableName: 'knex_migrations'
   },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

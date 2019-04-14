require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.PG_USERNAME}:${
      process.env.PG_PASSWORD
    }@localhost/ffxiv_lookup`,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds/dev',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: `postgres://${process.env.PG_USERNAME}:${
      process.env.PG_PASSWORD
    }@localhost/ffxiv_lookup`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds/test',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds/production',
    },
    useNullAsDefault: true,
  },
};

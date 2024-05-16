// env.js

require('dotenv').config();

const env = {
  POSTGRES_URL: process.env.astronomy_URL,
  POSTGRES_PRISMA_URL: process.env.astronomy_PRISMA_URL,
  POSTGRES_URL_NO_SSL: process.env.astronomy_URL_NO_SSL,
  POSTGRES_URL_NON_POOLING: process.env.astronomy_URL_NON_POOLING,
  POSTGRES_USER: process.env.astronomy_USER,
  POSTGRES_HOST: process.env.astronomy_HOST,
  POSTGRES_PASSWORD: process.env.astronomy_PASSWORD,
  POSTGRES_DATABASE: process.env.astronomy_DATABASE
};

module.exports = { env };
const { Pool } = require('pg');
const {HOST, USER, PASSWORD, DATABASE} = require('./config.js');

// Post Deployment
const pool = new Pool({
  host: HOST,
  port: 5432,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
})

module.exports = pool;


const { Pool } = require('pg')

const pool = new Pool({
  host: '3.92.115.8',
  port: 5432,
  user: 'lorenechew',
  password: 'pineapple',
  database: 'vmsdcproducts',
})


module.exports = pool;


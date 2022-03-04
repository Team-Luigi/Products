const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 3000,
  user: 'lorenechew',
  password: '',
  database: 'sdcproducts',
})

// const connection = pool.connect();


module.exports = pool;


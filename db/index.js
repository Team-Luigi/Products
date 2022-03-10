const { Pool } = require('pg')

// Post Deployment
const pool = new Pool({
  host: '3.92.115.8',
  port: 5432,
  user: 'lorenechew',
  password: 'pineapple',
  database: 'vmsdcproducts',
})

// Pre Deployment
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'lorenechew',
//   password: '',
//   database: 'sdcproducts',
// })

module.exports = pool;


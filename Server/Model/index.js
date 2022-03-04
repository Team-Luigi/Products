const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'lorenechew',
  password: '',
  database: 'sdcproducts',
})

module.exports = {
  getOneProduct: (params, callback) => {
    let queryString = 'SELECT * FROM products WHERE id = $1';
    pool.query(queryString, params, (err, products) => {
      if (err) {
        callback(err);
      } else {
        callback(null, products)
      }
    });
  },

  getProductStyles: (params, callback) => {
    let queryString = 'SELECT * FROM styles WHERE id_products = $1';
    pool.query(queryString, params, (err, styles) => {
      if (err) {
        callback(err);
      } else {
        callback(null, styles)
      }
    });
  }
}
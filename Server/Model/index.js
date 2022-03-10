const pool = require('../../db');

module.exports = {
  getManyProduct: (callback) => {
    let queryString = `SELECT * FROM products LIMIT 10`;
    pool.query(queryString, (err, products) => {
      if (err) {
        callback(err);
      } else {
        callback(null, products)
      }
    });
  },

  getOneProduct: (params, callback) => {
    let queryString = `SELECT products.*, json_agg(
      json_build_object(
        'feature', features.feature,
        'value', features.value
      )
    ) as features FROM products JOIN features ON products.id=features.product_id WHERE products.id=$1 group by products.id`;
    pool.query(queryString, params, (err, products) => {
      if (err) {
        callback(err);
      } else {
        callback(null, products)
      }
    });
  },

  getProductStyles: (params, callback) => {
    let queryString =
    `SELECT styles.product_id,
      (SELECT json_agg(
        json_build_object(
          'style_id', styles.id,
          'name', styles.name,
          'original_price', styles.original_price,
          'sale_price', styles.sale_price,
          'default?', styles.default_style,
          'photos', (SELECT
            json_agg(
              json_build_object(
                'thumbnail_url', photos.thumbnail_url,
                'url', photos.url
              )
            ) FROM photos WHERE styles.id=photos.style_id
          ),
          'skus', (SELECT
            json_object_agg(
              skus.id,
              json_build_object (
                'quantity', skus.quantity,
                'size', skus.size
              )
            ) FROM skus WHERE skus.style_id=styles.id
          )
        )
      ) as results FROM styles WHERE product_id=$1
    ) FROM styles WHERE product_id=$1`;

    pool.query(queryString, params, (err, styles) => {
      if (err) {
        callback(err);
      } else {
        callback(null, styles)
      }
    });
  },
}



// SELECT styles.product_id,
//       (SELECT json_agg(
//         json_build_object(
//           'style_id', styles.id,
//           'name', styles.name,
//           'original_price', styles.original_price,
//           'sale_price', styles.sale_price,
//           'default?', styles.default_style,
//           'photos', (SELECT
//             json_agg(
//               json_build_object(
//                 'thumbnail_url', photos.thumbnail_url,
//                 'url', photos.url
//               )
//             ) FROM photos WHERE styles.id=photos.style_id
//           ),
//           'skus', (SELECT
//             json_object_agg(
//               skus.id,
//               json_build_object (
//                 'quantity', skus.quantity,
//                 'size', skus.size
//               )
//             ) FROM skus WHERE skus.style_id=styles.id
//           )
//         )
//       ) as results FROM styles WHERE product_id=1
//     ) FROM styles WHERE product_id=1;

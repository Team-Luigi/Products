const model = require('../Model');

module.exports = {
  getProducts: (req, res) => {
    model.getManyProduct((err, products) => {
      if ((err)) {
        res.sendStatus(500);
      } else {
        res.send(products.rows);
      }
    })
  },

  getProduct: (req, res) => {
    let params = [req.params.id];
    model.getOneProduct(params, (err, products) => {
      if ((err)) {
        res.sendStatus(500);
      } else {
        res.send(products.rows);
      }
    })
  },

  getStyles: (req, res) => {
    let params = [req.params.id];
    model.getProductStyles(params, (err, styles) => {
      if ((err)) {
        console.log('getStyles: ', err);
        res.sendStatus(500);
      } else {
        res.send(styles);
      }
    })
  },

  getPhotos: (req, res) => {
    let params = [req.params.id_styles];
    model.getStylePhotos(params, (err, photos) => {
      if ((err)) {
        res.sendStatus(500);
      } else {
        res.send(photos);
      }
    })
  }
}
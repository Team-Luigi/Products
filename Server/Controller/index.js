const model = require('../Model');

module.exports = {
  getProduct: (req, res) => {
    let params = [req.params.id];
    model.getOneProduct(params, (err, products) => {
      if ((err)) {
        res.sendStatus(500);
      } else {
        res.send(products);
      }
    })
  },

  getStyles: (req, res) => {
    let params = [req.params.id];
    model.getProductStyles(params, (err, styles) => {
      if ((err)) {
        res.sendStatus(500);
      } else {
        res.send(styles);
      }
    })
  }
}
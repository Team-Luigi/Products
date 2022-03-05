const express = require('express');
const axios = require('axios');
const app = express();
const controller = require('./Controller');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/products', controller.getProducts);
app.get('/api/products/:id', controller.getProduct);
app.get('/api/products/:id/styles', controller.getStyles);




app.listen(3000);
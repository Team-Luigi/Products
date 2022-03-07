const app = require('../index.js');
const supertest = require('supertest');
const request = supertest(app);


describe('products', () => {
  it('Gets the first product', async () => {
    const res = await request.get('/api/products/1');
    // console.log(res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('Gets the styles for first product', async () => {
    const res = await request.get('/api/products/1/styles');
    // console.log(res.body);
    expect(res.status).toBe(200);
    // expect(res.body.length).toBe(10);
  });
})


import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '15s',
};

const min = 900000;
const max = 1000000;
const id = Math.floor(Math.random() * (max - min) + min);
const urlProduct = `http://localhost:3000/api/products/${id}`
const urlStyles = `http://localhost:3000/api/products/${id}/styles`

export default function () {
  const responses = http.batch([
    ['GET', urlProduct],
    ['GET', urlStyles]
  ]);
}
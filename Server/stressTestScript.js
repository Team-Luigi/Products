import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '15s',
};


const id = Math.floor(Math.random() * 1000011);
const urlProduct = `http://localhost:3000/api/products/${id}`
const urlStyles = `http://localhost:3000/api/products/${id}/styles`

export default function () {
  // http.get(url);
  // sleep(1);
  const responses = http.batch([
    ['GET', urlProduct],
    ['GET', urlStyles]
  ]);
}
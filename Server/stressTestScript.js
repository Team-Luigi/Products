import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '15s',
};

const url = 'http://localhost:3000/api/products/1/styles'

export default function () {
  http.get(url);
  sleep(1);
}
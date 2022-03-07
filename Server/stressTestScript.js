import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '15s',
};

const url = 'http://localhost:3000/api/products/1'

export default function () {
  http.get(url);
  sleep(1);
}
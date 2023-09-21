import http from 'k6/http';
//import { check } from 'k6';
import { check, sleep } from 'k6';

export default function() {
  let url = 'https://httpbin.test.k6.io/post';
  let response = http.post(url, 'Hello world!');
  check(response, {
      'Application says hello': (r) => r.body.includes('Hello world!')
  });

  sleep(1);
}

// console.log(response.json().data);
//}
// Add checks to your script

import { check, sleep } from 'k6';
import http from 'k6/http';

const url = 'http://benchmark-api.apps.ocp-dc1.pbh.gov.br';

export default function () {
  const payload = {};

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    tags: { name: 'Benchmark BullMQ' },
  };

  const resp = http.post(`${url}/bullmq`, payload, params);
  check(resp, {
    '[Benchmark BullMQ] is status 201': (r) => r.status === 200,
  });
  sleep(0.2);
}

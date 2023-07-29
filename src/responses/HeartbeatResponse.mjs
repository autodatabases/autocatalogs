import Response from './Response.mjs';

export default class HeartbeatRepository extends Response {
  static async build(result, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('OK');
  }
}

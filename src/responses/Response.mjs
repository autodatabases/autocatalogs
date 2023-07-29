export default class Response {
  static build(result, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(result));
  }
}

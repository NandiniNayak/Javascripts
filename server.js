const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  let url =req.url;
  let qs = url.split("?");
  let routes = qs[0].split("/");
  routes.splice(0,1);
  let response = {
      response: true,
      url: req.url,
      qs: qs[1],
      routes: routes,
      method: req.method
  };
  let cart = {
    type: "cart",
    url: req.url
  };
  let product = {
    type: "product",
    url: req.url
  };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let jsonResponse = {};
  switch (routes[0])
  {
    case "cart":
        jsonResponse = cart;
      break;
    case "product":
        jsonResponse = product;
      break;
    default:
        jsonResponse = response;
      break;
  }

  res.end(JSON.stringify(jsonResponse));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

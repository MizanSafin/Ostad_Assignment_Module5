const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`This is Home Page`);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`This is About Page`);
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`This is contact Page`);
    res.end();
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(401, { "content-type": "text/html" });
        res.write(`File write fail .`);
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`File write success .`);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h3 style="color:red">404 Page not Found</h3>`);
    res.end();
  }
});

server.listen(3000, () => {
  console.log(`Server is listening at the port 3000 ...`);
});

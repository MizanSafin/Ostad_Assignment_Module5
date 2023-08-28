const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`This is Home Page`);
  }
  if (req.url === "/about") {
    res.end(`This is About Page`);
  }
  if (req.url === "/contact") {
    res.end(`This is contact Page`);
  }
  if (req.url === "/file-write") {
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
  }
});

server.listen(3000, () => {
  console.log(`Server is listening at the port 3000 ...`);
});

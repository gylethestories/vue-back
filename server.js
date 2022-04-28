let http = require("http");
let users = [
  { id: 111, name: "alan1111" },
  { id: 2222, name: "alan2222" },
  { id: 3333, name: "alan33333" },
];
let server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/api/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("后端API接口服务器已经启动在3000端口！");
});

let http = require("http");
let users = [
  { id: 1, name: "alan1" },
  { id: 2, name: "alan2" },
  { id: 3, name: "alan3" },
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

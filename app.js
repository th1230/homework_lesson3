const headers = require("./service/headers");
const bodyParser = require("body-parser");
const express = require("express");

const postsRouter = require("./routes/posts");

const app = express();

// 連接資料庫
require("./connections");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/posts", postsRouter);
app.use((req, res, next) => {
  res.writeHead(404, headers);
  res.write(
    JSON.stringify({
      status: "false",
      message: "無此網站路由",
    })
  );
  res.end();
});

module.exports = app;

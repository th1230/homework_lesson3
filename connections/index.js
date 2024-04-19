const mongoose = require("mongoose");
const dotenv = require("dotenv");

// 載入環境變數
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("資料庫連線成功"));
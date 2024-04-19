const express = require("express");
const router = express.Router();
const headers = require("../service/headers");
const PostController = require("../controllers/posts");

// 取得所有貼文
router.get("/", PostController.getPost);
// 新增一則貼文
router.post("/", PostController.createPost);
// 更新一則貼文
router.patch("/:id", PostController.updatePost);
//刪除所有貼文
router.delete("/", PostController.deleteAllPost);
// 刪除一則貼文
router.delete("/:id", PostController.deleteOnePost);
router.options("/", (req, res) => {
  res.writeHead(200, headers);
  res.status(200).end();
});

module.exports = router;

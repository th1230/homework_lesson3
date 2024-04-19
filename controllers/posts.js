const handleSuccess = require("../service/handleSuccess");
const handleError = require("../service/handleError");
const Post = require("../models/posts");
const checkBody = require("../validators/checkBody");

const posts = {
  async getPost(req, res, next) {
    try {
      const posts = await Post.find();
      handleSuccess(res, posts);
    } catch (error) {
      handleError(res, error);
    }
  },
  async createPost(req, res, next) {
    try {
      const data = req.body;
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          checkBody(data[i]);
        }
      } else {
        checkBody(data);
      }

      const newPost = await Post.create(data);
      handleSuccess(res, newPost);
    } catch (error) {
      handleError(res, error);
    }
  },
  async updatePost(req, res, next) {
    try {
      const id = req.params.id;
      if (id === undefined || id === "") {
        return handleError(res, new Error("Id未填寫"));
      }
      const data = req.body;
      checkBody(data);
      const post = await Post.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );
      handleSuccess(res, post);
    } catch (error) {
      handleError(res, error);
    }
  },
  async deleteAllPost(req, res, next) {
    await Post.deleteMany();
    handleSuccess(res, "刪除成功");
  },
  async deleteOnePost(req, res, next) {
    try {
      const id = req.params.id;
      if (id === undefined || id === "") {
        return handleError(res, new Error("Id未填寫"));
      }
      await Post.findByIdAndDelete(id);
      handleSuccess(res, "刪除成功");
    } catch (error) {
      handleError(res, error);
    }
  },
};

module.exports = posts;

const handleError = require("../service/handleError");

function checkBody(data) {
  if (data.name === undefined || data.name === "") {
    return handleError(res, new Error("姓名未填寫"));
  } else if (data.content === "" || data.content === undefined) {
    return handleError(res, new Error("內容未填寫"));
  }
};

module.exports = checkBody;

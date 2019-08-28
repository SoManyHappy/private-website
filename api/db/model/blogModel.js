// 获取 Mongoose
const mongoose = require('mongoose');
const scheme = require("../schema/blogSchema");

let blogModel = mongoose.model("blog", scheme);

module.exports = blogModel
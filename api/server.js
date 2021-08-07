// implement your server here
const express = require('express');
const cors = require('cors');
const postsRouter = require('./posts/posts-router.js');
const server = express();

// require your posts router and connect it here
server.use(express.json());
server.use(cors());
server.use("/api/posts", postsRouter);

module.exports = server;
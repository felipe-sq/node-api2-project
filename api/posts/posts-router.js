// implement your posts router here
const Posts = require('./posts-model');
const express = require('express');
const router = express.Router();

// Posts Endpoints

router.get('/', (req, res) => {
  Posts.find(req.query)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ 
        message: 'The posts information could not be retrieved',
        error: err
       });
    });
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {
});

router.delete('/:id', (req, res) => {
});

router.get('/:id/comments', (req, res) => {
});
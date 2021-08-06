// implement your posts router here
const Posts = require('./posts-model.js');
const express = require("express");
const router = express.Router();

// Posts Endpoints

router.get('/', (req, res) => {
  Posts.find(req.query)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ 
        message: 'The posts information could not be retrieved',
       });
    });
});

router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if(post) {
        res.status(200).json(post);
      } else { 
        res.status(404).json({ 
          message: 'The post with the specified ID does not exist'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ 
        message: 'The post information could not be retrieved',
       });
    })
});

router.post('/', (req, res) => {
  const newPost = req.body
  if (!newPost.title || !newPost.contents) {
    res.status(400).json({ 
      message: 'Please provide title and contents for the post'
    });
  } else {
    Posts.insert(newPost)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ 
          message: 'There was an error while saving the post to the database',
       });
      })
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body

  try {
    if (!updates.title || !updates.contents) {
      res.status(400).json({ 
        message: 'Please provide title and contents for the post'
      });
    } else {
      const updatedPost = await Posts.update(id, updates)
      if (!updatedPost) {
        res.status(404).json({ 
          message: 'The post with the specified ID does not exist'});
      } else {
        res.status(200).json(updatedPost);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ 
      message: 'The post information could not be modified',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Posts.remove(id)
    if (!deletedPost) {
      res.status(404).json({ 
        message: 'The post with the specified ID does not exist'});
    } else {
      res.status(200).json(deletedPost);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ 
      message: 'The post could not be removed',
    });
  }
});

router.get('/:id/comments', (req, res) => {
  const postID = req.params.id;
  Posts.findPostComments(postID)
    .then(post => {
      if(post) {
        res.status(200).json(post);
      } else { 
        res.status(404).json({ 
          message: 'The post with the specified ID does not exist'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ 
        message: 'The comments information could not be retrieved',
       });
    })
});

module.exports = router;
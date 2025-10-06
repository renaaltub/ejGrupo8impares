const express = require('express');
const router = express.Router();
const { posts } = require('../data/Data');

// Lista de posteos con comentarios
router.get('/', (req, res) => {
  res.json(posts);
});

// Crear nuevo post
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'title, content y author son obligatorios' });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
    createdAt: new Date(),
    comments: []
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Agregar comentario a post
router.post('/:postId/comments', (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const { author, content } = req.body;

  const post = posts.find(p => p.id === postId);
  if (!post) return res.status(404).json({ error: 'Post no encontrado' });
  if (!author || !content) return res.status(400).json({ error: 'author y content son obligatorios' });

  const newComment = {
    id: post.comments.length + 1,
    author,
    content,
    createdAt: new Date()
  };
  post.comments.push(newComment);
  res.status(201).json(newComment);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { posts } = require('../data/Data');

//lista de posteos con comentarios
router.get('/', (req, res) => {
    res.json(posts);
});

//nuevo posteo
router.post('/', (req, res) => {
    const { title, content, author } = req.body;
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

//nuevo comentario a posteo
router.post('/:postId/comments', (req, res) => {
    const postId = parseInt(req.params.postId);
    const { author, content } = req.body;

    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ error: 'No existe el posteo' });
    }

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

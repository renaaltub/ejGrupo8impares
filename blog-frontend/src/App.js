import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './App.css';

const API_URL = "http://localhost:4000/api/posts";

function App() {
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({ title: "", content: "", author: "" });
  const [comments, setComments] = useState({}); // { postId: { author, content } }

  // Cargar posts al iniciar
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPosts(data);
  };

  // Crear nuevo post
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const { title, content, author } = newPost;
    if (!title || !content || !author) {
      alert("Todos los campos del post son obligatorios.");
      return;
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      setNewPost({ title: "", content: "", author: "" });
      fetchPosts();
    }
  };

  // Agregar comentario
  const handleCommentSubmit = async (postId) => {
    const comment = comments[postId];
    if (!comment || !comment.author || !comment.content) {
      alert("Todos los campos del comentario son obligatorios.");
      return;
    }

    const res = await fetch(`${API_URL}/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      setComments((prev) => ({ ...prev, [postId]: { author: "", content: "" } }));
      fetchPosts();
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Blog personal</h1>

      {/* Formulario de nuevo post */}
      <PostForm
        newPost={newPost}
        setNewPost={setNewPost}
        handleSubmit={handlePostSubmit}
      />

      {/* Lista de posts */}
      <PostList
        posts={posts}
        comments={comments}
        setComments={setComments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </div>
  );
}

export default App;
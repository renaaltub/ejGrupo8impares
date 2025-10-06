import React from "react";

function CommentForm({ postId, comments, setComments, handleCommentSubmit }) {
  React.useEffect(() => {
    if (!comments[postId]) {
      setComments((prev) => ({
        ...prev,
        [postId]: { author: "", content: "" },
      }));
    }
    // eslint-disable-next-line
  }, [postId]);

  const comment = comments[postId] || { author: "", content: "" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComments((prev) => ({
      ...prev,
      [postId]: { ...prev[postId], [name]: value },
    }));
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="text"
        name="author"
        placeholder="Tu nombre"
        value={comment.author}
        onChange={handleChange}
        style={{ marginRight: "0.5rem", width: "20%" }}
      />
      <input
        type="text"
        name="content"
        placeholder="Tu comentario"
        value={comment.content}
        onChange={handleChange}
        style={{ marginRight: "0.5rem", width: "40%" }}
      />
      <button onClick={() => handleCommentSubmit(postId)}>Enviar</button>
    </div>
  );
}

export default CommentForm;

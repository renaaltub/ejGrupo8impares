import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function PostList({ posts, comments, setComments, handleCommentSubmit }) {
  if (posts.length === 0) return <p>No hay publicaciones aún</p>;

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>
            {post.author} — {new Date(post.createdAt).toLocaleString()}
          </small>

          <hr />

          <h4>Comentarios</h4>
          <CommentList comments={post.comments} />

          <CommentForm
            postId={post.id}
            comments={comments}
            setComments={setComments}
            handleCommentSubmit={handleCommentSubmit}
          />
        </div>
      ))}
    </div>
  );
}

export default PostList;

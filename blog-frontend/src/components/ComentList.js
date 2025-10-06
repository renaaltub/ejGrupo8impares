
import React from 'react';

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

export default function CommentList({ comments }) {
    if (!comments || comments.length === 0) {
        return <div className="no-comments">Sin comentarios aún.</div>;
    }

    return (
        <div>
            {comments.map((c) => (
                <div key={c.id} className="comment">
                <div className="comment-author">
                {c.author}{" "}
                <span className="comment-date">- {formatDate(c.createdAt)}</span>
                </div>
                <div>{c.content}</div>
                </div>
            ))}
        </div>
    );
}
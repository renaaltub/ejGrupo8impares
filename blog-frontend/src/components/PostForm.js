import React from 'react';

export default function PostForm({ newPost, setNewPost, handleSubmit }) {
	const onChange = (e) => {
		const { name, value } = e.target;
		setNewPost((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form onSubmit={handleSubmit} style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '6px' }}>
			<h2>Crear nuevo post</h2>

			<div style={{ marginBottom: '0.5rem' }}>
				<label>Título</label>
				<input name="title" value={newPost.title} onChange={onChange} type="text" style={{ width: '100%' }} />
			</div>

			<div style={{ marginBottom: '0.5rem' }}>
				<label>Contenido</label>
				<textarea name="content" value={newPost.content} onChange={onChange} rows={4} style={{ width: '100%' }} />
			</div>

			<div style={{ marginBottom: '0.5rem' }}>
				<label>Autor</label>
				<input name="author" value={newPost.author} onChange={onChange} type="text" style={{ width: '100%' }} />
			</div>

			<button type="submit">Publicar</button>
		</form>
	);
}

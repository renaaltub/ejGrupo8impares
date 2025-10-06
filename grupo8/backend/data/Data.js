const posts = [
    {
    id: 1,
    title: "Ejemplo de publicación",
    content: "Este es el contenido de ejemplo.",
    author: "Rena",
    createdAt: new Date(),
    comments: [
        {
        id: 1,
        author: "user1",
        content: "buena publicación",
        createdAt: new Date()
        }
    ]
    }
];

module.exports = { posts };
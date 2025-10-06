const posts = [
    {
    id: 1,
    title: "Ejemplo de posteo",
    content: "Este es el contenido de ejemplo. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api/posts', postsRouter);

app.get('/', (req,res) =>{
    res.send('Bienvenido a la api de blog');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

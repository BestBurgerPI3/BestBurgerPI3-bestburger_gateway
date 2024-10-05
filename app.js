const express = require('express');
const imageRoutes = require('./routes/routes.js');

const app = express();
const port = 3015;

app.use('/img', imageRoutes);

app.listen(port, () => {
    console.log(`Servidor API de imágenes corriendo en http://localhost:${port}`);
});

const fs = require('fs');
const path = require('path');

let base64Image = '';

const processImage = (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).send('No se ha subido ninguna imagen.');
    }

    const imagePath = path.join(__dirname, '../', req.file.path);

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer la imagen.');
        }

        base64Image = Buffer.from(data).toString('base64');

        fs.unlink(imagePath, (err) => {
            if (err) {
                console.log('Error al eliminar el archivo temporal:', err);
            }
        });

        res.status(200).send('Imagen convertida y expuesta en /img/base64-comment');
    });
};


const getBase64Image = (req, res) => {
    if (!base64Image) {
        return res.status(404).send('No hay ninguna imagen convertida.');
    }

    res.send({ base64: base64Image });
};

module.exports = { processImage, getBase64Image };

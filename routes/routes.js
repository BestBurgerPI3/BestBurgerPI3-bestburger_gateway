const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploads.js');
const { processImage, getBase64Image } = require('../controllers/controllers.js');

router.post('/comment', upload.single('image'), processImage);

router.get('/base64-comment', getBase64Image);

module.exports = router;

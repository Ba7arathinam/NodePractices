const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

// Multer Memory Storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }


  const file = req.file;


  console.log('Received file:', file.originalname);
  console.log('File size:', file.size, 'bytes');
  console.log('MIME type:', file.mimetype);
  res.send('File uploaded successfully.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

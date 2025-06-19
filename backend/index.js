const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Controlador
const controller = {
  hola: (req, res) => {
    res.json({ mensaje: 'Hola mundo desde MVC' });
  }
};

app.get('/saludo', controller.hola);

app.listen(port, () => {
  console.log(`Servidor MVC corriendo en http://localhost:${port}`);
});


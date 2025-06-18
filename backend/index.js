const express = require('express');
const app = express();
const port = 3000;

// Controlador
const controller = {
  hola: (req, res) => {
    res.json({ mensaje: 'Hola mundo desde MVC' });
  }
};

// Vista (en este caso JSON simple)
app.get('/saludo', controller.hola);

app.listen(port, () => {
  console.log(`Servidor MVC corriendo en http://localhost:${port}`);
});

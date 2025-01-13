const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


app.post('/webhooks', (req, res) => {
    console.log('Evento recibido:', req.body);
    res.status(200).send('¡Hola Mundo :3 !');
});


app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));

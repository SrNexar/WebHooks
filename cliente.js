const axios = require('axios');

// Simular un evento enviando un WebHook
axios.post('http://localhost:3000/webhooks', { mensaje: '¡Hola Mundo!' })
    .then(response => console.log('Respuesta del servidor:', response.data))
    .catch(error => console.error('Error:', error));

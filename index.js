const express = require('express');

//creando instancia de express
const app = express();



const PORT = process.env.PORT;
app.listen( PORT, () => {
    console.log('servidor iniciado en puerto ', PORT);
});


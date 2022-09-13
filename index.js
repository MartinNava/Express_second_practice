//Importar dependencias
const express = require("express");
const path = require('path');
const consoleRoutes = require('./routes/console');

//Configurar App
const app = express();

//Importar características a App
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/api', consoleRoutes);

//Peticiones principales
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Lanzar la App
app.listen(8080, () => {
    console.log('Servidor en línea');
});
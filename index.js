const express = require('express');
const clientRoutes = require('./Routes/ClientRoutes')
const LivreRoutes = require('./Routes/LivreRoutes')
const app = express();

app.use(express.json());


app.use('/clients', clientRoutes)
app.use('/livres', LivreRoutes)

module.exports = app;
const express = require('express');
const clientRoutes = require('./Routes/ClientRoutes')
const LivreRoutes = require('./Routes/LivreRoutes')
const AuteurRoutes = require('./Routes/AuteurRoutes')
const TransactionEmprunterRoutes = require('./Routes/TransactionEmprunterRoutes')
const app = express();

app.use(express.json());


app.use('/clients', clientRoutes)
app.use('/livres', LivreRoutes)
app.use('/auteurs', AuteurRoutes)
app.use('/transactionEmprunter', TransactionEmprunterRoutes)

module.exports = app;
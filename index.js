const express = require('express');
const clientRoutes = require('./Routes/ClientRoutes')
const LivreRoutes = require('./Routes/LivreRoutes')
const AuteurRoutes = require('./Routes/AuteurRoutes')
const TransactionEmprunterRoutes = require('./Routes/TransactionEmprunterRoutes')
const AuthenticateRoutes = require('./Routes/AuthenticateRoutes')
const app = express();
const cors = require ('cors')

app.use(cors())
app.use(express.json());

app.use('/auth', AuthenticateRoutes)
app.use('/clients', clientRoutes)
app.use('/livres', LivreRoutes)
app.use('/auteurs', AuteurRoutes)
app.use('/transactionEmprunter', TransactionEmprunterRoutes)

module.exports = app;
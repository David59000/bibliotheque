const express = require('express');
const TransactionEmprunterController = require('../Controllers/TransactionEmprunterController');
const router = express.Router();

router.get('/', (request,result) =>TransactionEmprunterController.getAllTransactionEmprunter(request,result));
router.get('/:id',(request,result) => TransactionEmprunterController.getTransactionEmprunterByID(request, result));
router.post('/', (request,result) => TransactionEmprunterController.addTransactionEmprunter(request,result));
router.delete('/:id',(request, result) => TransactionEmprunterController.removeTransationEmprunter(request, result));
router.patch('/:id', (request, result) => TransactionEmprunterController.updateTransactionEmprunter(request, result))

module.exports = router;
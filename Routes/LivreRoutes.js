const express = require('express');
const LivreController = require('../Controllers/LivreController');
const router = express.Router();

router.get('/', (request,result) =>LivreController.getAllLivre(request,result));
router.get('/:id',(request,result) => LivreController.getLivreByID(request, result));
router.post('/', (request,result) => LivreController.addLivre(request,result));
router.delete('/:id',(request, result) => LivreController.removeLivre(request, result));
router.patch('/:id', (request, result) => LivreController.updateLivre(request, result));

module.exports = router;
const express = require ('express');
const AuteurController = require ('../Controllers/AuteurController');
const router = express.Router();

router.get('/',(request,result) =>AuteurController.getAllAuteur(request,result));
router.get('/:id',(request,result) => AuteurController.getAuteurByID(request, result));
router.post('/', (request,result) => AuteurController.addAuteur(request,result));

module.exports = router;
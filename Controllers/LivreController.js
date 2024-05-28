const { log } = require("console");
const LivreService = require("../Services/LivreService");

class LivreController {
  async getAllLivre(request, result) {
    try {
      {
        const livres = await LivreService.getAllLivre();
        result.json(livres);
      }
    } catch (error) {
      console.log(error)
      result.status(500);
      // console.log = "error"
      result.json({
        error: "Une erreur est survenue lors de la récupération des livres",
      });
    }
  }
  async getLivreByID(request, result) {
    try {
      const livre = await LivreService.getLivreByID(request.params.id);
      result.json(livre);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de la récupération du livre",
      });
    }
  }
  async addLivre(request, result) {
    try {
      const livre = await LivreService.addLivre(request.body);
      result.json(livre);
    } catch (error) {
      result.status(500);
      result.json({
        error: "Une erreur est survenue lors de l'insertion du livre",
      });
    }
  }
  async removeLivre(request, result) {
    try {
        await LivreService.removeLivre(request.params.id);
        result.json({message : "Le livre a bien été supprimé"});
    } catch (error) {
        result.status(500);
        result.json({error : "Une erreur est survenue lors de la suppression du Livre"})
        
    }
  }

  async updateLivre(request, result){
    try {
        const livre = await LivreService.updateLivre(request.params.id, request.body);
        result.json(livre);
    } catch (error) {
        result.status(500);
        result.json({error : "Une erreur est survnue lors de la modification du livre"})
        
    }
  }
}

module.exports = new LivreController();
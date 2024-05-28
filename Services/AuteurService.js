const Auteur = require ("../Models/Auteur");
class AuteurService {
    async getAllAuteur(){
        return await Auteur.findAll();
    }
    async getAuteurByID(AuteurByID){
        return await Auteur.findByPk(AuteurByID);
    }
    async addAuteur(auteur){
        return await Auteur.create(auteur);
    }

}

module.exports = new AuteurService();
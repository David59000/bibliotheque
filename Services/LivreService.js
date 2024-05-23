const Livre = require("../Models/Livre");

class LivreService {
    async getAllLivre(){
        return await Livre.findAll();
    }
    async getLivreByID(livreID){
        return await Livre.findByPk(livreID);
    }
    async addLivre(livre){
        return await Livre.create(livre)
    }

    async removeLivre(livreID){
        return await Livre.destroy({
            where : {LI_ID : livreID}
        })
    }

    async updateLivre(livreID, livre){
        return await Livre.update(livre , {
            where : {LI_ID : livreID},
            individualHooks : true
        })
    }
}

module.exports = new LivreService();
const Clientemprunteur = require("../Models/Client");

class ClientService {
    async getAllClient(){
        return await Clientemprunteur.findAll();
    }
    async getClientByID(clientID){
        return await Clientemprunteur.findByPk(clientID);
    }
    async addClientemprunteur(clientemprunteur){
        return await Clientemprunteur.create(clientemprunteur)
    }

    async removeClient(clientID){
        return await Clientemprunteur.destroy({
            where : {CL_ID : clientID}
        })
    }

    async updateClient(clientID, client){
        return await Client.update(client , {
            where : {CL_ID : clientID},
            individualHooks : true
        })
    }
}

module.exports = new ClientService();
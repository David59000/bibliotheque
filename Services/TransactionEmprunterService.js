const TransactionEmprunter = require("../Models/TransactionEmprunter");

class TransactionEmprunterService {
    async getAllTransactionemprunter(){
        return await TransactionEmprunter.findAll();
    }
    async getTransactionemprunterByID(transactionEmprunterID){
        return await TransactionEmprunter.findByPk(transactionEmprunterID);
    }
    async addTransactionemprunter(transactionEmprunter){
        return await TransactionEmprunter.create(transactionEmprunter)
    }

    async removeTransactionemprunter(transactionEmprunterID){
        return await TransactionEmprunter.destroy({
            where : {TR_ID : transactionEmprunterID}
        })
    }

    async updateTransactionEmprunter(transactionEmprunterID, transactionEmprunter){
        return await TransactionEmprunter.update(transactionEmprunter , {
            where : {TR_ID : transactionEmprunterID},
            individualHooks : true
        })
    }
}

module.exports = new TransactionEmprunterService();
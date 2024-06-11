const TransactionEmprunter = require("../Models/TransactionEmprunter");

class TransactionEmprunterService {
    async getAllTransactionEmprunter(){
        console.log("service")
        return await TransactionEmprunter.findAll();
    }
    async getTransactionEmprunterByID(transactionEmprunterID){
        return await TransactionEmprunter.findByPk(transactionEmprunterID);
    }
    async addTransactionEmprunter(transactionEmprunter){
        return await TransactionEmprunter.create(transactionEmprunter)
    }

    async removeTransactionEmprunter(transactionEmprunterID){
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
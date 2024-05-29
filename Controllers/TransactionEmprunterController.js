const { log } = require("console");
const TransactionEmprunterService = require("../Services/TransactionEmprunterService");

class TransactionEmprunterController{
    
    async getAllTransactionEmprunter(request,result){
        try {
            const Transactions = await TransactionEmprunterService.getAllTransactionEmprunter();
            result.json(Transactions);
        } catch (error) {
            result.status(500);
            // console.log = "error"
            result.json({error : "Une erreur est survenue lors de la récupération des transactions"});
        }
    }

    async getTransactionEmprunterByID(request,result){
        try {
            const transaction = await TransactionEmprunterService.getTransactionEmprunterByID(request.params.id);
            result.json(transaction);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la transaction"})
            
        }
        }

        async addTransactionEmprunter(request, result) {
            try {
              const transaction = await TransactionEmprunterService.addTransaction(request.body);
              result.json(transaction);
            } catch (error) {
                console.log(error);
              result.status(500);
              result.json({
                error: "Une erreur est survenue lors de l'insertion de la transaction",
              });
            }
          }

          async removeTransactionEmprunter(request, result) {
            try {
                await TransactionEmprunterService.removeTransactionEmprunter(request.params.id);
                result.json({message : "La transaction a bien été supprimée"});
            } catch (error) {
                result.status(500);
                console.log(error);
                result.json({error : "Une erreur est survenue lors de la suppression de la transaction"})
                
            }
          }

          async updateTransactionEmprunter(request, result){
            try {
                const transaction = await TransactionEmprunterService.updateTransactionEmprunter(request.params.id, request.body);
                result.json(transaction);
            } catch (error) {
                result.status(500);
                console.log =("error")
                result.json({error : "Une erreur est survnue lors de la modification de la transaction"})
                
            }
          }
}
module.exports = new TransactionEmprunterController();
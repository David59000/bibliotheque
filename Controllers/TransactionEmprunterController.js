const TransactionEmprunterService = require("../Services/TransactionEmprunterService");

class TransactionEmprunterController{
    
    async getAllTransaction(request,result){
        try {
            const Transactions = await TransactionEmprunterService.getAllTransaction();
            result.json(Transactions);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des transactions"});
        }
    }

    async getTransactionByID(request,result){
        try {
            const transaction = await TransactionEmprunterService.getTransactionByID(request.params.id);
            result.json(transaction);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la transaction"})
            
        }
        }

        async addTransaction(request, result) {
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

          async removeTransaction(request, result) {
            try {
                await TransactionEmprunterService.removeTransaction(request.params.id);
                result.json({message : "La transaction a bien été supprimée"});
            } catch (error) {
                result.status(500);
                console.log(error);
                result.json({error : "Une erreur est survenue lors de la suppression de la transaction"})
                
            }
          }

          async updateTransaction(request, result){
            try {
                const transaction = await TransactionEmprunterService.updateTransaction(request.params.id, request.body);
                result.json(transaction);
            } catch (error) {
                result.status(500);
                result.json({error : "Une erreur est survnue lors de la modification de la transaction"})
                
            }
          }
}
module.exports = new TransactionEmprunterController();
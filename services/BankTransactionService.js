const Banktransaction = require('../models/BankTransaction');

class BankTransactionService {
    async getAllTransactions() {
        return await Banktransaction.findAll();
    }

    async getTransactionById(transactionId) {
        return await Banktransaction.findByPk(transactionId);
    }

    async addTransaction(transactionData) {
       await Banktransaction.create(transactionData);
    }
}

module.exports = BankTransactionService;
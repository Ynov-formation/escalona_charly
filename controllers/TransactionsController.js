// controllers/userController.js
const BankTransactionService = require('../services/BankTransactionService');
const bankTransactionService = new BankTransactionService();

class TransactionsController {
    async getAllTransactions(req, res) {
        const { name, email } = req.body;

        try {
            const newUser = await bankTransactionService.getAllTransactions({ name, email });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error: error.message });
        }
    }

    async getTransactionById(req, res) {
        const transactionId = req.params.id;
        const transaction = await bankTransactionService.getTransactionById(transactionId);

        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    async addTransaction(req, res) {
        const { amount, transaction_type,  sender_id,receiver_id } = req.body;

        try {
            const newUser = await bankTransactionService.addTransaction({ amount, transaction_type,  sender_id,receiver_id });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error: error.message });
        }
    }
}

module.exports = new TransactionsController();

// controllers/userController.js
const AccountService = require('../services/AccountService');
const accountService = new AccountService();

class AccountsController {
    async getAllAccounts(req, res) {
        try {
            const allAccounts = await accountService.getAllAccounts();
            res.status(201).json(allAccounts);
        } catch (error) {
            res.status(400).json({ message: 'Error getting accounts', error: error.message });
        }
    }

    async getAccountById(req, res) {
        const userId = req.params.id;
        const user = await accountService.getAccountById(userId);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Error, cannot find user by this ID' });
        }
    }

    async addAccount(req, res) {
        const { name, email } = req.body;
        try {
            const newUser = await accountService.addAccount({ name, email });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error: error.message });
        }
    }
}

module.exports = new AccountsController();

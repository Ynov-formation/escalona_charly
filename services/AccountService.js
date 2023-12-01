const Account = require('../models/Account');

class AccountService {
    async getAllAccounts() {
        return await Account.findAll();
    }

    async getAccountById(accountId) {
        return await Account.findAll({
            where: {
                id:accountId
            }
        });
    }

    async getAccountByNumber(accountNumber) {
        return await Account.findAll({
            where: {
                account_number:accountNumber
            }
        });
    }

    async addAccount(accountData) {
        const accountCreated= await Account.create(accountData);
        return accountCreated.id
    }
}

module.exports = AccountService;
const Customer = require('../models/Customer');

class CustomerService {
    async getAllCustomers() {
        return await Customer.findAll();
    }

    async getCustomerById(userId) {
        return await Customer.findByPk(userId);
    }

    async addCustomer(customerData) {
       await Customer.create(customerData);
    }
}

module.exports = CustomerService;
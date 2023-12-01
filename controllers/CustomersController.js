const CustomerService = require('../services/CustomerService');
const customerService = new CustomerService();

class CustomersController {
    async getAllCustomers(req, res) {
        try {
            const allCustomers = await customerService.getAllCustomers();
            res.status(201).json(allCustomers);
        } catch (error) {
            res.status(400).json({ message: 'Error getting customers', error: error.message });
        }
    }

    async getCustomerById(req, res) {
        const customerId = req.params.id;
        const user = await customerService.getCustomerById(customerId);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    async addCustomer(req, res) {
        const { lastname, firstname, account_id } = req.body;
        try {
            const newCustomer = await customerService.addCustomer({ lastname, firstname, account_id });
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(400).json({ message: 'Error creating customer', error: error.message });
        }
    }
}

module.exports = new CustomersController();

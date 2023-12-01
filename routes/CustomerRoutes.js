const express = require('express')
const router = express.Router()
const {getAllCustomers, addCustomer, getCustomerById} = require('../controllers/CustomersController');

router.get('/', async (req, res) => {
    const customers = getAllCustomers();
    res.send(customers);
})
router.get('/:id', (req, res) => {
    const customerId = req.params.id;
    const customer = getCustomerById(customerId);
    res.send(customer);
})
router.get('/logout', (req, res) => {
    // Ici on déconnecte le token
})

module.exports = router
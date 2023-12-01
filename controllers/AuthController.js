const CustomerService = require('../services/CustomerService');
const customerService = new CustomerService();
const bcrypt = require('bcrypt');

const { addAccount,getAccountByNumber } = require("../services/AccountService");
const { addCustomer } = require("../services/CustomerService");
const HelperService = require("../services/HelperService");
const helperService = new HelperService();
const jwt = require('jsonwebtoken')

class AuthController {

    /**
     * Login method
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async login(req, res) {

        // On récupère les informations de connexion
        const { account_number, account_pass } = req.body;

        // Si on trouve un utilisateur
        const account_found = await getAccountByNumber({ account_number });
        try {
            if(account_found){
                // On utilise bcrypt pour comparer le hash avec le mot de passe en clair donné par l'user
                const isPassGood = bcrypt.compareSync(account_pass, account_found.account_pass);
                if(isPassGood) {
                    // Si c'est bon, on génère un JWT à partir du numéro de compte de l'utilisateur,
                    // qui nous permettra d'effectuer le reste des transactions
                    const token = jwt.sign({account_number})
                    res.status(200).json({ message: "Login successful", token:token });
                }
            }
        } catch (error) {
            res.status(400).json({ message: 'Error during login', error: error.message });
        }
    }

    async register(req, res) {
        try {
            const { lastname, firstname, account_pass } = req.body;

            const account_number = await helperService.getRandomNumber(111111111111, 999999999999);

            // A partir d'un  numéro de compte généré aléatoirement, on créer une entrée dans Customer, et account, la première représente les données
            // utilisateurs, l'autre les donnnées liées au compte
            const account_pass_hashed = bcrypt.hashSync(account_pass, 10);
            const account_id = await addAccount({ account_number, account_pass_hashed });
            const user = await addCustomer({ lastname, firstname, account_id });

            if (user) {
                res.status(201).json({ message: "User registered successfully", account_number:account_number });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error:error });
        }
    }
}

module.exports = new AuthController();

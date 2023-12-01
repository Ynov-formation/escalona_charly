const express = require('express');
const { sequelize } = require('./config/sequelize');
const app = express();
const port = 3000;
app.use(express.json());


// Toutes les routes de notre application=
const AuthRoutes = require('./routes/AuthRoutes')
const CustomerRoutes = require('./routes/CustomerRoutes')
const BanktransactionsRoutes = require('./routes/TransactionsRoutes')
const AccountsRoutes = require('./routes/AccountsRoutes')


// Donnera quelque chose comme : /login /register
app.use('/', AuthRoutes)

// Le prefix de base sera donc /customers /transactions
app.use('/customers', CustomerRoutes)
app.use('/transactions', BanktransactionsRoutes)
app.use('/accounts', AccountsRoutes)


sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
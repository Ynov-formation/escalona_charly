const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')


router.post('/login', (req, res) => {
    res.send('Birds home page')
})
router.post('/register', AuthController.register);
router.get('/logout', (req, res) => {
    // Ici on déconnecte le token
})



module.exports = router
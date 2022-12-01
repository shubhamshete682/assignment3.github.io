const express = require("express");
const router = express.Router();

const { registration } = require('../controllers/users')
const { login } = require('../controllers/users')
    // const { validation } = require('../controllers/validation')
router.get('/', (req, res) => {

    res.render('index')
})
router.get('/login', (req, res) => {

    res.render('login')
})
router.get('/register', (req, res) => {

    res.render('register')
})
router.get('/welcome/:id', (req, res) => {

        let email = req.params.id
        res.render('welcome', { email: email })
    })
    // router.post('/postdata', validation);
router.post('/postdata', registration);
router.post('/prodata', login);

module.exports = router;
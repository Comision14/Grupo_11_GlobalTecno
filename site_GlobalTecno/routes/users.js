const express = require('express');
const router = express.Router();

const {register, login} = require('../controllers/userController');
/* const {login} = require('../controllers/userController.js'); */


/* /users */
router.get('/register', register);
router.get('/login', login);



module.exports = router;


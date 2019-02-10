const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
var VerifyToken = require('../config/auth/VerifyToken');


// register user
router.post('/register', (req,res) =>{
  userController.register(req, res);
});


// login user
router.post('/login', VerifyToken, (req, res, next) => {
    userController.login(req,res);
});


//page inside
router.get('/home', (req, res, next)=>{
    res.send("Welcome on the site : " + req.userId )
})



// logout
router.get('/logout', (req, res) => {
  res.status(200).send({ auth: false, token: null });
});


// EXAMPLE FOR AUTHENTICATION
router.get('/me', (req, res, next) => {
    userController.testVerification(req,res);
});


// FIND items for a user
router.get('/:user/items', (req,res) =>{
    // SEND LOGIN DETAILS
});



module.exports = router;




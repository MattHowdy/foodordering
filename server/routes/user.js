const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
var VerifyToken = require('../config/auth/VerifyToken');


// register auth
router.post('/register', (req,res) =>{
  userController.register(req, res);
});

// VerifyToken is passed as 2. parameter into the router.post(url, verifyToken.,calback) function
// login auth
router.post('/login', (req, res) => {
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


// FIND items for a auth
router.get('/:auth/items', (req,res) =>{
    // SEND LOGIN DETAILS
});



module.exports = router;




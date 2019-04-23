const express = require('express')
const router = express.Router()
const userService = require('../services/userService')
const jwt = require("jsonwebtoken")
// var VerifyToken = require('../auth/VerifyToken')

router.post('/register', async (req,res) =>{
    const lastName = req.body.last_name,
                     firstName = req.body.first_name,
                     email = req.body.email,
                     password = req.body.password

    try {
        if (lastName && firstName && email && password) {
            const response = await userService.register(lastName, firstName, email, password)

            const newUserCreated = response[1]
            const user = response[0]

            if (!newUserCreated) {
                return res.status(404).send({error: "User already exists"})
            }

            return res.status(201).send({auth: true, user});
        } else {
            return res.status(404).send({error: "Username, email and password are required."})
        }
    }
    catch (e) {
        return res.status(500).send({ error : e.message})
    }
})



// VerifyToken is passed as 2. parameter into the router.post(url, verifyToken.,calback) function
// login auth
router.post('/login', async (req, res) => {
    const lastName = req.body.last_name, firstName = req.body.first_name,
        email = req.body.email, password = req.body.password

    try{
        if(lastName && firstName && password && email){
            // const response = await userService.login(lastName,firstName,email,password)
            // let user = response[0]
            // let userExists = response[1]
            console.log("Stiff is tehere")
            // if(userExists){
            //     return res.status(404).send("User already exists")
            // }
            //
            // let token = jwt.sign({id: user.id}, process.env.SECRETKEY, {
            //     expiresIn: 86400
            // });
            // return res.status(201).send({auth: true, token: token, userId : user.id});

        }else{
            return res.status(404).send({error: "Username, email and password are required"})
        }
    }catch (error) {
        return res.status(500).send({error})
    }
})


//page inside
router.get('/home', (req, res, next)=>{
    res.send("Welcome on the site : " + req.userId )
})


// logout
router.get('/logout', (req, res) => {
  res.status(200).send({ auth: false, token: null })
})


// EXAMPLE FOR AUTHENTICATION
router.get('/me', (req, res, next) => {
    userService.testVerification(req,res)
})


// FIND items for a auth
router.get('/:auth/items', (req,res) =>{
    // SEND LOGIN DETAILS
})



module.exports = router




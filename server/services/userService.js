const { User } = require('../db/sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { generateToken } = require('../auth/auth')

module.exports = {

    register:  async (last_name, first_name, email, pw) => {
        let password = bcrypt.hashSync(pw, +process.env.SALT)

        const response = await User.findOrCreate({
            where: {
                email : email
            },
            defaults: {
                password : password,
                first_name : first_name,
                last_name : last_name,
                tokens : []
            }
        })

        const token = generateToken(response[0].id)

        response[0].tokens = response[0].tokens.concat(token)
        await response[0].save()

        return response
    },
    login: (req, res) => {
        let email = req.body.email
        let password = req.body.password

        if (email && password) {
            User.findOne({
                where: {email: email}
            }).then(user => {
                if (!user) return res.status(404).send("No auth found.")
                let passwordIsValid = bcrypt.compareSync(password, user.password)

                if (!passwordIsValid) {
                    return res.status(408).send({auth: false, token: null})
                }
                let token = jwt.sign({id: user.id}, process.env.SECRETKEY, {
                    expiresIn: 86400 // expires in 24 hours
                })
                res.status(200).send({auth: true, token: token, userId : user.id})
            })
        }
    },
    testVerification: (req, res) => {
        User.findOne({
            where: {id: req.userId}
        }).then(user => {
            if (!user) return res.status(404).send("No auth found.")
            res.status(200).send(user)
        })
    }
}



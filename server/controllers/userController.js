const {User} = require('../config/sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

module.exports = {
    register: (req, res) => {
        let password = req.body.password;
        let hashedPassword = bcrypt.hashSync(password, saltRounds);
        let email = req.body.email;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;

        if (email && first_name && last_name && password) {
            User.findOrCreate({
                where: {
                    email: email
                },
                defaults: {
                    password: hashedPassword,
                    first_name: first_name,
                    last_name: last_name
                }
            }).then(result => {
                let user = result[0];
                let isCreated = result[1];

                if (!isCreated) { // false if auth already exists
                    console.log('User already exists' + user);
                    //res.json(auth);
                    res.status(200).send("User already exists")
                } else {
                    console.log('Created auth...');
                    let token = jwt.sign({id: user.id}, process.env.SECRETKEY, {
                        expiresIn: 86400
                    });
                    res.status(200).send({auth: true, token: token, userId : user.id});
                }
            })
        }
    },
    login: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        if (email && password) {
            User.findOne({
                where: {email: email}
            }).then(user => {
                if (!user) return res.status(404).send("No auth found.");
                let passwordIsValid = bcrypt.compareSync(password, user.password);

                if (!passwordIsValid) {
                    return res.status(408).send({auth: false, token: null});
                }
                let token = jwt.sign({id: user.id}, process.env.SECRETKEY, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({auth: true, token: token, userId : user.id});
            })
        }
    },
    testVerification: (req, res) => {
        User.findOne({
            where: {id: req.userId}
        }).then(user => {
            if (!user) return res.status(404).send("No auth found.");
            res.status(200).send(user);
        });
    }
};



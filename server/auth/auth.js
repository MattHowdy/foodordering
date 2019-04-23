var jwt = require('jsonwebtoken');


const verifyToken = (req, res, next)=> {
    let token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) =>{
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        req.userId = decoded.id;
        next();
    });
}


const generateToken = (id)=>{
    const token = jwt.sign({id}, process.env.SECRETKEY, {
        expiresIn: 86400
    })
    return token
}


module.exports = { verifyToken,  generateToken};
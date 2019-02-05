/** require dependencies */
const express = require("express");
//const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');


const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/foodordering";

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'duwkj1axx',
    api_key: '',
    api_secret: ''
});


/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })
} catch (error) {

}

let port = 5000 || process.env.PORT;


/** set up routes {API Endpoints} */
// routes(router);


/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/api', router)

// set up {API Endpoints};
//get main page
app.get('/', (req,res) =>{
    mongoose.get();
    res.send({"categories": 'List of categories'})
});

//db.`dbname`.find()

// get one item page
app.get('/item', (req,res) =>{
    res.send({"item": 'item'})
});

// login page
app.get('/login', (req,res) =>{
    res.send({"login": 'login'})
});


// register info sent
app.post('/register', (req,res) =>{
    res.send(`registering": ${req.body.post}`)
});


// add to cart
app.post('/cart', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});


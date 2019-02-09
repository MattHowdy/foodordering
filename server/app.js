/** require dependencies */
const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const router = express.Router();
let port = 5000 || process.env.PORT;


/** set up middlewares */
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/api', router);

// set up routers
app.use('/', require('./routes/item'));
app.use('/', require('./routes/user'));


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
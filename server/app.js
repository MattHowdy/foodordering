/** require dependencies */
const express = require("express")
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const router = express.Router()
const port = process.env.PORT


/** routers*/
const itemRoutes = require('./routes/itemRoutes')
const userRoutes = require('./routes/userRoutes')


/** set up middlewares */
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/api', router)
app.use('/', itemRoutes)
app.use('/', userRoutes)


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})
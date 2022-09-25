const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const hpp = require('hpp')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')
const routes = require('./routes/routes')

const xss = require('xss-clean')
const app = express();
const PORT = process.env.PORT || 3001

dotenv.config({path:'./config/config.env'});
require('./database/connection')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }))

app.use(
    express.json({
        limit: "10kb",
    })
);
app.use(
    hpp({
        whitelist: [
            "name",
            "email",
            "password",
        ],
    })
);
app.use(xss());
app.use(routes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
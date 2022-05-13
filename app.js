const express = require('express')
const app = express()
const swaggerJSON = require('./swagger.json')
const swaggerUI = require('swagger-ui-express')
const logger = require("morgan")
  
app.use(express.json())
app.use(express.urlencoded({extends: false}))
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

app.use(logger("dev"))
app.set("view engine", "ejs");


// const YAML = require('yamljs')
// const swaggerDocument = YAML.load('collection.yaml')
// app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const router = require("./routes/index");
app.use(router);

module.exports = app
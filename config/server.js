const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
    res.header("Access-Control-Request-Method", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

consign()
.include('./routes')
.then('./config/database.js')
.then('./models')
.into(app);

module.exports = app;
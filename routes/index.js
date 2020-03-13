var express = require('express')
var app = express()

app.get('/', function(req, res) {
 res.render('index', {title: 'Nursing Home'})
})

module.exports = app;
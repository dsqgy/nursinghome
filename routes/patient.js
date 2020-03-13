var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM Patient", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('patient/list', {
     title: 'Patient List',
     data: ''
    })
   }else{
    res.render('patient/list', {
     title: 'Patient List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app
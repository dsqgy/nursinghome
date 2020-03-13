var express = require('express')
var app = express()

app.get('/', function(req, res, next){
 req.getConnection(function(error, conn){
  conn.query("SELECT * FROM Employee", function(err, rows, fields) {
   if(err){
    req.flash('error', err)
    res.render('user/list', {
     title: 'Employee List',
     data: ''
    })
   }else{
    res.render('user/list', {
     title: 'Employee List',
     data: rows
    })
   }   
  })
 })
})
module.exports = app
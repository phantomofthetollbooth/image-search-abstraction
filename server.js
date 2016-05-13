
var express = require('express');
var mongo = require('mongodb').MongoClient;
var routes = require('./app/index.js');
var search = require('./app/imagesearchabstraction.js');
var app=express();
require('dotenv').config();
app.set('port', process.env.PORT || 3000);





var url = process.env.MONGOLAB_URI;     
   

  mongo.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connected to', url);

 app.use('/public', express.static(process.cwd() + '/public'));
 

 
 routes(app, db);
 search(app,db);
 app.listen(app.get('port'));
  }
});
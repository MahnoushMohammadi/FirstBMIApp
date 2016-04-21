var express = require('express');
var mongodb = require('mongodb');

var user = 'm_mohammadi';
var password = '405342';
var host = '127.0.0.1';
var port = '27017'; // Default MongoDB port
var database = 'm_mohammadi';
 var connectionString = 'mongodb://' + user + ':' + password + '@' +
//var connectionString = 'mongodb://' +
   host + ':' + port + '/' + database;

// These will be set once connected, used by other functions below
var tblLanguages;

//CORS Middleware, causes Express to allow Cross-Origin Requests
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

var app = express();
app.use(express.bodyParser());
app.use(allowCrossDomain);

mongodb.connect(connectionString, function(error, db) {
  if (error) {
    throw error;
  }

  tblLanguages = db.collection('tblLanguages');

  // Close the database connection and server when the application ends
  process.on('SIGTERM', function() {
    console.log("Shutting server down.");
    db.close();
    app.close();
  });

  var server = app.listen(4558, function() {
    console.log('Listening on port %d', server.address().port);
  });
});

// Creates a new user in the database
app.post('/store', function(request, response) {
  console.log('New user being created.');
  var langComp = request.body;
  console.log(request.body);
  if (!langComp.name || !langComp.languages )
  {
    return response.json(400, 'Missing a parameter.');
  }
  
  tblLanguages.find({ name: langComp.name }).toArray(function(err,resultArray){
    if(resultArray.length > 0) return response.json(400,"User already exists");
    else tblLanguages.insert(langComp, function(err, result) {
      if (err) {
        return response.json(400, 'An error occurred creating this user.');
      }
      return response.json(200, 'User created successfully!');
    });
  });

});

// Uses a email address and password to retrieve a user from the database
app.post('/retrieve', function(request, response) {
      console.log('Retrieving users');
      tblLanguages.find().toArray(function(err,resultArray){
	console.log(resultArray);
	return response.json(200,resultArray);
      });
    });

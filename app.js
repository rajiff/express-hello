var http = require('http');
var morgan = require('morgan');
var express = require('express');
const bodyParser = require('body-parser');

var empRoutes = require('./appserver/employee/employeeRouter');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var server = http.createServer(app);
server.listen(8080);

console.log("Server started...");

app.get("/", function(req, res) {
  res.json({
    'hi': 'bi'
  });
});

app.use("/employee", empRoutes);

module.exports = app;
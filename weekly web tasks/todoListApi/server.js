const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel');
    bodyParser = require('body-parser');



// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://longdvgcs220434:daovinhlong@web2cluster.6tftv.mongodb.net/');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes') // Importing Routes
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
const express = require('express');
const cors = require('cors'); // middleware to handle request for different orgins
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routers/vocabRouter');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://longdvgcs220434:daovinhlong@web2cluster.6tftv.mongodb.net/',
    { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;

const app = express() // Create express app instance

app.use(cors()); // Allow Api to be access by different origins
app.use(bodyParser.urlencoded({ extended: true }));  // handle url data
app.use(bodyParser.json()); // handle json data

routes(app); // establish routes for app

app.listen(port);

app.use((req, res) => { // handle url error
    res.status(404).send({ url: `${req.originalUrl} not found`});
});

console.log('API server started on: ' + port);
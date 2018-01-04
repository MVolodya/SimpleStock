const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      Images = require('./api/models/imageModels'), //created model loading here
      Users = require('./api/models/userModels'),
      bodyParser = require('body-parser');

// mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Imagedb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const imageRoutes = require('./api/routes/imageRoutes'); //importing route
imageRoutes(app); //register the route
const userRoutes = require('./api/routes/userRoutes'); //importing route
userRoutes(app); //register the route

app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port);

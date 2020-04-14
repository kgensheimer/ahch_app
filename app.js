const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');



// Connect to Database
const mongoDB = 'mongodb://localhost:27017/ahch';
mongoose.connect(mongoDB, { useNewUrlParser: true });

// Get the Default Connection
let db = mongoose.connection;

// Check for Connection
db.once('open', () => {
	console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Initialize App
const app = express();

// Bring in Models



// Set Static Public Folder
const static = express.static(__dirname + '/public');
app.use('/public', static);

// Include Bootstrap from node_modules
const bootstrap = express.static(__dirname + '/node_modules/bootstrap');
app.use('/bootstrap', bootstrap);

// Include Fullcalendar from node_modules
const fullcalendar = express.static(__dirname + '/node_modules/@fullcalendar');
app.use('/@fullcalendar', fullcalendar);

// Include jQuery from node_modules
const jquery = express.static(__dirname + '/node_modules/jquery');
app.use('/jquery', jquery);



// Middleware to Recognize JSON in Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine Setup: Handlebars (extension .hbs)
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs');

// Configure Routing from ./routes
const configRoutes = require('./routes');
configRoutes(app);

// Run Server
app.listen(3000, () => {
	console.log("Server running.");
	console.log('Routes will be running on http://localhost:3000');
});

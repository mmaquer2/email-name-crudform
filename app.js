const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');



// Database
const db = require('./config/db_conn');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();


const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));




//home page route and view
app.get('/',( req, res) => {
  console.log('hello world')
  res.render('welcome')

});

//get user workout log
app.get('/log', (req, res) => {



});





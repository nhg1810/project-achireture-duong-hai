
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const db = require('./app/config/db');
const bodyParser = require('body-parser')
const app = express();

//dotenv
require('dotenv').config();

app.use('/admin',express.static(path.join(__dirname, '/public/')))
app.use('/google',express.static(path.join(__dirname, '/public/')))
app.use('/detailproject',express.static(path.join(__dirname, '/public/')))

app.use(express.static(path.join(__dirname, '/public/')))
//handle bar(template engine)
const hbs = require('express-handlebars');
const { extname } = require('path');

//port
const port = 3000

//debug logger
app.use(morgan('combined'));
//db conect
db.connect()


// template handlebar.engine
app.engine('.hbs', hbs.engine({
  extname: 'hbs'
}
));
app.use(express.json());

//body parser
app.use(express.urlencoded({
  extends: true
})) 
 
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

app.use(express.json());
app.use(express.urlencoded());

//route
route(app)

app.listen(port, () => console.log(`Your app run on port: ${port}`))
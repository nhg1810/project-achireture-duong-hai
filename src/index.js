
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const db = require('./app/config/db');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//handle bar(template engine)
const hbs  = require('express-handlebars');
const { extname } = require('path');
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
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

//route
route(app)

app.listen(port, () => console.log(`Your app run on port: ${port}`))
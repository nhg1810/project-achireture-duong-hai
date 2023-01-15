
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();


//handle bar(template engine)
const hbs  = require('express-handlebars');
const { extname } = require('path');
const port = 3000
//debug logger
app.use(morgan('combined'));

// template handlebar.engine
app.engine('.hbs', hbs.engine({
  extname: 'hbs'
}
));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')


app.use('/', require('./routes/index'))

app.listen(port, () => console.log(`Your app run on port: ${port}`))
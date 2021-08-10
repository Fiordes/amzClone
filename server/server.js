const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const User = require('./models/user')

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
    if (err) console.log(err);
    console.log('Connected to database')
})

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// require APIs
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownersRoutes = require('./routes/owners');
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', ownersRoutes);

app.listen(3000, (err) => {
    if (err) console.log(err);

    console.log('listening port 3000')
})
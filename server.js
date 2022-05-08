const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

//import routes
const cartRoutes = require('./BackEnd/routes/Cart_Routes/cartRoute');




//import generatereport
const cartReportGenerateRoute = require("./BackEnd/routes/Cart_Routes/PDF-Generator/Cart_Report")

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(cartRoutes);


app.use('/cartreport',cartReportGenerateRoute);


const PORT = 8000;

//const DB_URL ='mongodb+srv://ecommerce:ecommerce@cluster0.apfwk.mongodb.net/cartdb?retryWrites=true&w=majority'
MONGODB_URL = 'mongodb+srv://eCommerceApp:eCommerceApp@ecommerceapp.gpjyg.mongodb.net/eCommerceApp?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => console.log('DB connection error', err));




app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})
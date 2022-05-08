const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const customerRoutes = require('./routes/customers');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(customerRoutes); 


const PORT = 8000;
const DB_URL = 'mongodb+srv://eCommerceApp:eCommerceApp@ecommerceapp.gpjyg.mongodb.net/eCommerceApp?retryWrites=true&w=majority'

mongoose.connect(DB_URL).then(() =>{
    console.log("DB connected")
}).catch((err) => console.log("DB connection error",err));


app.listen(PORT, () =>{
   
    console.log(`Server is up and running on port: ${PORT}`);
});


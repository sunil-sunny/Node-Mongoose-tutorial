const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const userRoute = require('./Routes/userRoute');
const bodyParser = require('body-parser');
let port=process.env.port || 3000;
app.use(bodyParser.json());

app.use('/user', userRoute);

app.get('/',(req,res)=>{
    res.send("Node App Started");
})

//connect to DB
mongoose.connect('mongodb+srv://avinash:avinash123@healthhub.mff3o.mongodb.net/Tutorial?retryWrites=true&w=majority',{ useNewUrlParser: true }, (err) => {

    if(!err){
        console.log('Data env success');
    }
    else{
        console.log('DB Error');
    }   
});

app.listen(3000);
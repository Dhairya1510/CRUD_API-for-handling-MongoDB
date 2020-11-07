const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/tryhard'

const app = express();

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;


app.use(bodyParser.json())


app.use('/api',require('./Routes/API'));



app.use(function(err,req,res,next){
    //console.log(err)
    res.status(422).send({error:err.message});
});


app.listen(4000,function(){
    console.log('now listnig');
});
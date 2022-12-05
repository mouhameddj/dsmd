const express = require('express')
const MongoDB = require('./db_config/db')
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/books', require('./routes/book'));

app.listen(5000,()=>{
    console.log('server connected');
})
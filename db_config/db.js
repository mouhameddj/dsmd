const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bookapi').then
{
    console.log('connected');
}
module.exports=mongoose
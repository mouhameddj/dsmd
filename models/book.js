const mongoose =require('mongoose');
const bookModels= mongoose.Schema({
    text:{
        type:String,
  

    },
    auteur:{
        type:String,
  

    },
    prix:{
        type:Number,
      

    }
}

);
module.exports=mongoose.model('book',bookModels)
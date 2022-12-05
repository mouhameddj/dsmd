const express=require('express')


const router=express.Router();
const {getbook,setBook, updateBook, deleteBook} =require('../controlleur/book')
router.route('/').get(getbook).post(setBook)
router.route('/:id').put(updateBook).delete(deleteBook)

module.exports=router
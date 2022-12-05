const mongoose=require('mongoose')
const Book = require('../models/book');
const express = require('express');
const res = require('express/lib/response');

const asyncHandler = require('express-async-handler');
// @desc    Get books
// @route   GET /api/books
// @access  public
const getbook = async(req,res)=>{
    const books= await Book.find()
    res.status(200).json(books)


};

const setBook = asyncHandler(async(req,res)=>{
    console.log(req.body);
    if (!req.body.text) {
        

        res.status(400)
        throw new Error('Please add a text field')
      }
      const book = await Book.create({
        text: req.body.text,
        auteur: req.body.auteur,
        prix: req.body.prix
       


       
      }
    )

    
      res.status(200).json(book)
});
const updateBook = asyncHandler(async(req,res)=>{
    const book = await Book.findById(req.params.id) 
    if (!book) {
        res.status(400)
        throw new Error('book not found')
      }
    

      
      const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
      
        res.status(200).json(updateBook)
  

});
const deleteBook =asyncHandler(async(req,res)=>{
    const book = await Book.findById(req.params.id)

    if (!book) {
        res.status(400)
        throw new Error('book not found')
      }
     await book.remove()

    res.status(200).json({ id: req.params.id })
 
});

module.exports={
    getbook,setBook,updateBook,deleteBook

}
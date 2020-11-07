const express = require('express');
const router = express.Router();
const Author = require('../Model/author');


router.get('/author',function(req,res,next){
    Author.find({}).then(function(author){
     res.send(author);
    });
});

router.post('/author',function(req,res,next){
    Author.create(req.body).then(function(author){
    res.send(author);
    }).catch(next);   
 });


router.put('/author/:id',function(req,res,next){
    Author.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Author.findOne({id:req.params.id}).then(function(author){
            res.send(author);
        }).catch(next);
       
    });
    
});

router.delete('/author/:id',function(req,res,next){
    console.log(req.params.id);
    Author.findByIdAndRemove({_id: req.params.id}).then(function(author){
       res.send(author); 
   })
    
}); 


module.exports = router;
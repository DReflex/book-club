const express= require('express');
const router = express.Router();
const User = require('../models/user');
const Comments = require('../models/comments')
const Books = require('../models/books')

router.put('/user/:id', function(req, res, next){
  User.findOne({id: req.params.id}).then(function(result){
    result.nickname = req.body.data.name;
    result.author = req.body.data.author;
    result.background = req.body.data.background;
    result.img = req.body.data.img;
    result.quote = req.body.data.quote
    result.save()
    res.end()
  }).catch(next);
})
router.put('/comment/:id' ,function(req, res, next){
  function update (data, id){
    if (data.stared == false){
      data.stared.push(id)
    }else{
      if(data.stared.indexOf(id) == -1){
           data.stared.push(id)
        }else{
          var newStar = data.stared.filter(function(num){
            return num != id
          })
          data.stared = newStar
          }
      }
  }
  Comments.findOne({id: req.params.id}).then(function(data){
    update(data, req.body.id)
    data.save()
  })
  User.findOne({id: req.body.id}).then(function(user){
    update(user, req.params.id)
    user.save()
    return user
  }).then(function(user){
    console.log("this is user stars",user.stared);
    res.send(user.stared)
  }).catch(next)

})
router.get("/books/:id", function(req, res, next){
    Books.findOne({id: req.params.id}).then(function(book){
      res.send(book);
    }).catch(next)
})




module.exports = router;

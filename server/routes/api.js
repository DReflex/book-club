const express= require('express');
const router = express.Router();
const User = require('../models/user');
const Books = require('../models/books')
const Comments = require('../models/comments')

// userLogin
//development
router.get('/user', function(req, res, next){
  User.find({}).then(function(result){
    res.send(result);
  }).catch(next);
})
router.get('/user/:id', function(req, res, next){
  User.findOne({id: req.params.id}).then(function(result){
    if(!result){
      console.log("404");
      res.status(404);
      res.send("no User")
    }
    else{
      res.send(result)
    }
  }).catch(next);
});
// get one
router.post('/user', function(req, res, next){
  console.log("this is post",req.body)
  User.create(req.body).then(function(Product){
    res.send(Product);
  }).catch(next)
});

router.put('/user/:id', function(req, res, next){
  console.log("todos init", req.body)
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});



router.delete('/user/:id', function(req, res, next){
  User.findByIdAndRemove({_id: req.params.id}).then(function(del){
    res.send(del);
  }).catch(next);
})

router.get('/books', function(req, res, next){
  Books.find({}).then(function(result){
    res.send(result)
  }).catch(next);
})

router.get('/books/:id', function(req,res, next){
  Books.findOne({id: req.params.id}).then(function(book){
    res.send(book)
  })
})

router.post('/books', function(req, res, next){
  Books.create(req.body).then(function(result){
    res.send(result);
  }).catch(next);
})

// CommentSchema
router.post('/comment', function(req, res, next){
  Comments.create(req.body).then(function(result){
    res.send(result);
  }).catch(next);
})

router.get('/comment/:id', function(req, res, next){
  Comments.find({id: req.params.id}).then(function(result){
    res.send(result)
  }).catch(next);
})

//add comments


router.put('/comment/:id', function(req, res, next){
  console.log(req.body.comments);
  Comments.findOneAndUpdate({id: req.params.id}, {$push: {comments:req.body.comments}}).then(function(){
      Comments.findOne({id: req.params.id}).then(function(schema){
      res.send(schema.comments[schema.comments.length -1]);
      });
  }).catch(next);
});

//add response
router.put('/test/:id', function(req,res,next){
  Comments.findOneAndUpdate(
  {
     comments: {$elemMatch:{_id: req.params.id}},
  },
  {$push: {"comments.$.response": req.body.response}}
).then(function(){
    Comments.findOne(
      {
        comments: {$elemMatch:{_id: req.params.id}},
      }
    ).then(function(schema){
      console.log(req.params.id);
      schema.comments.forEach(function(comment){
        if(comment._id == req.params.id){
          res.send(comment.response);
        }
      })
    }).catch(next)
  })

})



//update res
router.put('/test_res', function(req, res, next){
 Comments.findOne(
    {
    comments: {$elemMatch: {_id: req.body.comment_id}}
  }
  ).then(function(data){
    var comment_id = req.body.comment_id;
    var response_id = req.body.response_id;
    var modify = req.body.modify;
    data.comments.forEach(function(elem){
      if(elem._id == comment_id){
        if(req.body.response_id === undefined){
          elem.vote = req.body.vote;
          elem.up = req.body.up;
          elem.down = req.body.down
        }else{
          elem.response.forEach(function(response){
            if(response._id == response_id){
              response.vote = req.body.vote
              response.up= req.body.up
              response.down=req.body.down
            }
          })
        }
      }
    })
    data.save()
    res.end()
  }).catch(next)

})

// 5a26849354ca1b29646c9c92
// Comments.findOneAndUpdate(
// {
//   id:req.params.id,
//    comments: {$elemMatch:{_id: '5a2433f17023ec229884b7a4'}}
// },
//   {$push: {"comments.$.response": "req.body.response"}}
// ).then(function(){
//   res.end()
// }).catch(next);
// })

router.put('/vote', function(req, res, next){
  Comments.findOne(
    {
    comments: {$elemMatch: {_id: req.body.com_id}}
    }
  ).then(function(data){
    data.comments.forEach(function(comment){
      if(comment._id == req.body.com_id){
        if(req.body.res_id === undefined){
          res.send({
            up:comment.up,
            down:comment.down
          })
        }else{
          comment.response.forEach(function(response){
            if(response._id == req.body.res_id){
              res.send({
                up: response.up,
                down: response.down
              })
            }
          })
        }
      }
    })
  }).catch(next)
})



module.exports = router;

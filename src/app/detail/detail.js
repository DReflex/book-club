import React from 'react';
import './detail.css'
import { connect }from 'react-redux'
import {
   detailBook, addComment, resetComment,
   q_comment, q_res, r_comment, r_res, res_toggle,
   shrink_detail, com_vote, add_res,star
 } from '../../actions/index';
 import { subscribeComment, subscribeResponse } from '../../actions/api'

 import io from 'socket.io-client';
 const socket = io();

class Book extends React.Component {
  constructor(){
    super();
    this.test_res = this.test_res.bind(this)
      subscribeComment((err, data, id) => {
        if(id === this.props.location.pathname.split('/')[2]){
          console.log("this is comment");
           this.props.dispatch(addComment(data))
        }else{
          console.log("no data")
        }
      })
      subscribeResponse((err, data, id,res_id) => {
        if(id === this.props.location.pathname.split('/')[2]){
          this.props.dispatch(add_res(res_id, data))
        }
        else{
          console.log("no response");
        }
      })


  }
  componentWillMount(){
    this.props.user.loginStatus? true : this.props.history.push('/')
  }
  componentDidMount(){
    window.scrollTo(0, 1)
    window.scrollTo(0,0)
    var id = this.props.location.pathname.split('/')[2]
    fetch(`/api/books/${id}`).then(res => res.json())
    .then((res)=>{
      fetch(res.selfLink).then(link => link.json())
      .then((link) => {
        let data = link.volumeInfo
        let bookData={
          title:data.title,
          subtitle:data.subtitle,
          img: data.imageLinks.small,
          author:data.authors[0],
          categories:data.categories? data.categories[0]: "no category",
          link:data.previewLink,
          desc:data.description,
          id:data.id,
        }
        this.props.dispatch(detailBook(bookData))

      })
    })
    fetch(`/api/comment/${id}`).then(res=>res.json())
     .then((data) =>{
       this.props.dispatch(resetComment())
       data[0].comments.map(comment => this.props.dispatch(addComment(comment)))
     })
  }

  handleComments = () =>{
    var user = this.props.user
    var id = this.props.location.pathname.split('/')[2]
    fetch(`/api/comment/${id}`,{
      method: 'PUT',
      mode: "CORS",
      body: JSON.stringify({
      comments:{
        creator:user.name,
        creator_id:user.id,
        text: this.props.input.comment,
        vote:0,
        who:[],
        response:[],
        creator_img:user.img
      }
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((comment) => {
      //dispatch
      socket.emit("comment", comment, id)
      // this.props.dispatch(addComment(comment))
    })
    this.props.dispatch(r_comment())
  }
  test=(id, text)=>{
    var pathId = this.props.location.pathname.split('/')[2]
    var user = this.props.user
    fetch(`/api/test/${id}`,{
      method: 'PUT',
      mode: 'CORS',
      body: JSON.stringify({
        response:{
          creator:user.name,
          creator_id:user.id,
          creator_img:user.img,
          text: text,
          vote:0,
          up:[],
          down:[]
        },
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((response) => {
        let Res = response[response.length -1]
        //dispatch
        socket.emit("response", Res, pathId, id)
          // this.props.dispatch(add_res(id, Res))
        return this.props.dispatch(r_res(id))
      })


  }
  test_res = (res_id, com_id, vote, type) =>{

    Promise.resolve(this.vote(res_id, com_id))
    .then((votes) => {
      let up = votes.up, down = votes.down;
      if(type === "up"){
          if(up.indexOf(this.props.user.id) === -1){
            if(down.indexOf(this.props.user.id) === -1){
              console.log("voting up");
              up.push(this.props.user.id)
              vote ++;
              update_vote(up, down, vote)
              this.props.dispatch(com_vote(com_id, res_id, vote, up, down));
            }else{
              console.log("filter vote down");
              let newDown = down.filter(id => id !== this.props.user.id)
              up.push(this.props.user.id)
              vote += 2;
              update_vote(up, newDown, vote)
              this.props.dispatch(com_vote(com_id, res_id, vote, up, newDown));
            }
          }else{
            console.log("unvote up");
            let newUp = up.filter(id => id !== this.props.user.id)
            vote --;
            update_vote(newUp, down, vote)
            this.props.dispatch(com_vote(com_id, res_id, vote, newUp, down));
          }
      }else{
        if(down.indexOf(this.props.user.id) === -1){
          if(up.indexOf(this.props.user.id) === -1){
            console.log("voting down");
            down.push(this.props.user.id);
            vote --;
            update_vote(up, down, vote)
            this.props.dispatch(com_vote(com_id, res_id, vote, up, down));
            }else{
            console.log("filter vote up");
            let newUp = up.filter(id => id!== this.props.user.id)
            down.push(this.props.user.id)
            vote -=2;
            update_vote(newUp, down, vote)
            this.props.dispatch(com_vote(com_id, res_id, vote, newUp, down));
          }
        }else{
          console.log("unvote down");
          let newDown = down.filter(id => id !== this.props.user.id)
          vote ++;
          update_vote(up, newDown, vote)
          this.props.dispatch(com_vote(com_id, res_id, vote, up, newDown));
          }
      }
    })

    function update_vote(up, down, vote){
      fetch('/api/test_res', {
        method: "PUT",
        mode:"CORS",
        body:JSON.stringify({
          vote: vote,
          up: up,
          down: down,
          comment_id:com_id,
          response_id: res_id
        }),
        headers:{
          'Content-Type': "application/json"
        }
      })

    }

  }
  vote = (res_id, com_id) => {
    var op = Promise.resolve(
      fetch('/api/vote', {
        method:'PUT',
        mode:"CORS",
        body:JSON.stringify({
          res_id,
          com_id
        }),
        headers:{
          'Content-Type': "application/json"
        }
      }).then(data => data.json()).then((data) => {
        return data
      })
    )
    return op
  }

  handleToggle = (id, toggle) =>{
    this.props.dispatch(res_toggle(id, toggle))
  }
  //inputs
  queryComment = (e) =>{
    var text= e.target.value
    this.props.dispatch(q_comment(text))
  }
  queryResponse = (e, id) =>{
    var text= e.target.value
    this.props.dispatch(q_res(id, text))
  }
  handleStar = () => {
    var id = this.props.location.pathname.split('/')[2]
    fetch(`/api2/comment/${id}`,{
      method:"PUT",
      mode: "CORS",
      body: JSON.stringify({id: this.props.user.id}),
      headers:{
        'Content-Type': "application/json"
      }
    }).then(res => res.json())
    .then(stared => this.props.dispatch(star(stared)))
  }
  render(){
    let input= this.props.input
    let detail = this.props.detailBook
    let comments = this.props.comment
    let color = (this.props.user.stared.indexOf(this.props.location.pathname.split('/')[2]) === -1)? "rgb(97, 97, 97)": "rgb(255, 177, 4)"
    return (
      (!detail.desc || !comments)? "loading":(
      <div className="book-detail">
        <div className="book-heading" >

          <div className="io">
                <div className="book-overlay"></div>
            <div className="title">
              <h2>{detail.title}</h2>
              <h2 className="hide">: {detail.subtitle}</h2>
            </div>
            <div className="book-content">
              <img width="150px" src={detail.img} alt="#_#" />
              <div className="detail">
                <h4>{detail.author}</h4>
                <p>{detail.categories}</p>
                <a target="_blank" href={detail.link}>full Preview</a>
                <div>
                  { detail.shrink ? (
                    <p>
                    {detail.desc.slice(0,200)}
                    <br/>
                    <span onClick={()=>this.props.dispatch(shrink_detail())} className="showMore">Show more...</span>
                  </p>)
                  :(
                    <p>
                      {detail.desc}
                      <br/>
                      <span onClick={()=>this.props.dispatch(shrink_detail())} className="showMore">Show less...</span>
                    </p>
                  )
                }
              </div>
              </div>
            </div>
            <span onClick={this.handleStar} className="star"><i style={{color: color}} className="fa fa-star" aria-hidden="true"></i></span>
          </div>

        </div>
        <div className="comments">
          {comments.map((comment,i) =>{
            let up = (comment.up.indexOf(this.props.user.id) === -1)? 16:20
            let down = (comment.down.indexOf(this.props.user.id) === -1)? 16:20
            return(
              <div className="single-comment" key={i}>
                <div className="vote">
                  <div className="number"><h4>{comment.vote}</h4></div>
                  <div className="vote-option">
                    <span onClick={()=>this.test_res(undefined, comment._id, comment.vote, "up")}><i style={{fontSize:up}} className="fa fa-chevron-up" aria-hidden="true"></i></span>
                    <span onClick={()=>this.test_res(undefined, comment._id, comment.vote, "down")}><i style={{fontSize:down}} className="fa fa-chevron-down" aria-hidden="true"></i></span>
                  </div>
                </div>
                <div className="author-container">
                  <div className="author">
                    <img src={comment.creator_img} alt="profile" />
                    <h3>{comment.creator}</h3>
                  </div>
                  <div className="comment">
                    <p>{comment.text}</p>
                  </div>
                </div>

                {
                  comment.response.map((res, i) =>{
                    let resUp = (res.up.indexOf(this.props.user.id) === -1)? 16:20
                    let resDown = (res.down.indexOf(this.props.user.id) === -1)? 16:20
                    return(
                      <div key={i} className="response">
                        <div className="vote">
                          <div className="number"><h4>{res.vote}</h4></div>
                          <div className="vote-option">
                            <span onClick={()=>this.test_res(res._id, comment._id, res.vote, "up")}><i style={{fontSize:resUp}} className="fa fa-chevron-up" aria-hidden="true"></i></span>
                            <span onClick={()=>this.test_res(res._id, comment._id, res.vote, "down")}><i style={{fontSize:resDown}} className="fa fa-chevron-down" aria-hidden="true"></i></span>
                          </div>
                        </div>
                        <div className="author">
                          <img className="xs-hide" src={res.creator_img} alt="profile" />
                          <h3>{res.creator}</h3>
                        </div>
                        <div className="comment">
                          <p>{res.text}</p>
                        </div>

                      </div>
                    )
                  })

              }
              { comment.showing ? (
                <div className="reply">
                  <textarea onChange={(e)=>this.queryResponse(e, comment._id)}value={comment.res_query}></textarea>
                  <button className="leave-res" onClick={()=>this.test(comment._id, comment.res_query)}>Add</button>
                  <button className="cancle" onClick={()=>this.handleToggle(comment._id, comment.showing)}><i className="fa fa-times-circle-o" aria-hidden="true"></i></button>
                </div>

              ) : <button className="reply-button" onClick={()=>this.handleToggle(comment._id, comment.showing)}><i className="fa fa-commenting" aria-hidden="true"></i></button>
            }

            </div>
            )
          } )}

        </div>
        <div className="add-comment">
          <h3>Leave comment</h3>
          <textarea onChange={(e)=>this.queryComment(e)} value={input.comment}></textarea>
          <button onClick={this.handleComments}>Add Comment</button>
        </div>

      </div>
      )
    )
  }
}
const store = (store)=>{
  return{
    detailBook: store.detailBook,
    comment: store.comment,
    user: store.user,
    input: store.input,
  }
}
Book = connect(store)(Book)
export default Book

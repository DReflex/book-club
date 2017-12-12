import React from 'react'
import { connect } from 'react-redux';
import { bookList, resetList } from '../../actions/index'
import './home.css'

class Home extends React.Component {
componentDidMount(){
  this.props.dispatch(resetList())
  fetch('/api/books').then(res=>res.json())
  .then(data=>data.map(book=>{
    let singleBook = {
      id: book.id,
      img: book.img,
      title: book.title,
      selfLink: book.selfLink
    }
      return this.props.dispatch(bookList(singleBook))
  }))
}
  redirect = (id) =>{
    this.props.history.push(`/book/${id}`)
  }
  render(){
    let list = this.props.bookList
    return (
      <div className="home">
        <h1>This is Home</h1>
        <div className="book-list">
          {
            list ?
              (list.map((book, i) =>{
              return(
                <div key={i} onClick={()=>this.redirect(book.id)} className="home-book">
                  <img src={book.img} alt="#0" />
                  <h4>{book.title}</h4>
                </div>
              )
              })
            )
             : null
          }

        </div>
      </div>
    )
  }
}
const store = (store) =>{
  return {
    user: store.user,
    bookList: store.bookList
  }
}

Home = connect(store)(Home)

export default Home

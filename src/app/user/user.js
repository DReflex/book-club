import React from 'react';
import { connect } from 'react-redux';
import { searchQuery, resetQuery, searchBook,resetBook, addStar, r_star} from '../../actions/index'
import ShowingBook from './showingBook';
import UserDetail from './user-detail';
import UserEditing from './user-editing'
import './user.css'
class User extends React.Component {
  componentWillMount(){
    this.props.user.loginStatus? true : this.props.history.push('/')

  }
  constructor(props){
    super(props)
    this.dispatchUpdate= this.dispatchUpdate.bind(this)
  }
  componentDidMount(){
    window.scrollTo(0, 1)
    window.scrollTo(0,0)
    this.props.dispatch(resetBook())
    //preventing doubling redux
    setTimeout(() => this.dispatchUpdate(), 10)
  }
  dispatchUpdate = () =>{
    this.props.dispatch(r_star())
    this.updateStars()
  }
  bookSearch=()=>{
    const API = 'AIzaSyAPfWyX5Q56UN8WgmRvPzAySPAigYbg3k8'

    // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.query.search}&key=${API}`)
    .then(res => res.json()).then((data)=> {
      let book = data.items[0]
      let bookData = {
        id:book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        link: book.volumeInfo.canonicalVolumeLink,
        img: book.volumeInfo.imageLinks.thumbnail,
        desc: book.volumeInfo.description,
        selfLink: book.selfLink
      }
      this.props.dispatch(searchBook(bookData))
      this.props.dispatch(resetQuery())
    })
  }
  updateStars = () =>{
    let user = this.props.user
    if(user.stared){
      user.stared.map((id) =>{
        fetch(`api2/books/${id}`).then(res => res.json())
        .then((book) =>{
         let data = {
           id:book.id,
           title: book.title,
           img: book.img
         }
         return this.props.dispatch(addStar(data))
        })
        return null;
      })
    }
    return null
  }
  bookQuery=(e)=>{
    var query = e.target.value
    this.props.dispatch(searchQuery(query))

  }

  render(){
    let user = this.props.user
    let star = this.props.staredBook
    return (
    <div>
        {
          (!user.editing) ? <UserDetail /> : <UserEditing />
      }

      <div className="search-box">
        <h2>Search book</h2>
        <div className="input">
          <div className="input-book"><img src="https://maxcdn.icons8.com/Share/icon/ios7/Science//book1600.png" alt=" "/></div>
          <input value={this.props.query.search} onChange={(e) => this.bookQuery(e)} placeholder="book's name" className="input-text" type="text"/>
          <button onClick={this.bookSearch} className="input-search">Search</button>
        </div>
        {(this.props.searchBook.id) ? <ShowingBook />: null}
      </div>
      <div className="book-list">
        <h2>Starred books</h2>
        {
          star.length ? (
            <div className="list-container">
              {
                star.map((book, i)=>{
                  return (
                    <div className="SIL" onClick={()=> this.props.history.push(`/book/${book.id}`)} key={i}>
                      <img alt={book.title} src={book.img} />
                      <h3>{book.title}</h3>
                    </div>
                  )
                })
              }
            </div>
          ) : false
        }
      </div>


    </div>
    )
  }
}
const store = (store) =>{
  return {
    query: store.query,
    searchBook: store.searchBook,
    user: store.user,
    staredBook: store.staredBook
  }
}

User = connect(store)(User)

export default User

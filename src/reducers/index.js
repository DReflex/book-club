import { combineReducers } from 'redux'
import user from './user'
import query from './query'
import searchBook from './searchBook'
import bookList from './bookList'
import detailBook from './detail'
import comment from './comment'
import input from './placeHolder'
import staredBook from './staredBooks'

const todoApp = combineReducers({
  user,
  query,
  searchBook,
  bookList,
  detailBook,
  comment,
  input,
  staredBook
})

export default todoApp

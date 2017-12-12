const stateInit ={
  id:String,
  title: String,
  author: String,
  link: String,
  img: String,
  desc: String,
  selfLink: String
}
const searchBook = (state= stateInit, action)=>{
  switch(action.type){
    case "ADD_BOOK":
    return{
      id:action.id,
      title: action.title,
      author: action.author,
      link: action.link,
      img: action.img,
      desc: action.desc,
      selfLink: action.selfLink
    }
    case "RESET_BOOK":
    return state = {}

    default:
    return state
  }
}
export default searchBook

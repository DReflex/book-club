const stateInit ={
  title:String,
  subtitle:String,
  img: String,
  author:String,
  categories:String,
  link:String,
  desc:String,
  shrink:true
}
const detailBook = (state= stateInit, action)=>{
  switch(action.type){
    case "DETAIL":
    return{
      title:action.title,
      subtitle:action.subtitle,
      img: action.img,
      author:action.author,
      categories:action.categories,
      link:action.link,
      desc:action.desc,
      shrink:true
    }
    case "SHRINK_DETAIL":
    return{
      ...state,
      shrink: !state.shrink
    }

    default:
    return state
  }
}
export default detailBook

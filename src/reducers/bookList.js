const stateInit =[]
const bookList = (state= stateInit, action)=>{
  switch(action.type){
    case "BOOK_LIST":
    return[
      ...state,
      {
        id: action.id,
        img:  action.img,
        title:  action.title,
        selfLink: action.selfLink
      }
    ]
    case "RESET_LIST":
    return state=[]

    default:
    return state
  }
}
export default bookList

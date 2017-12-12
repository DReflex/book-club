const stateInit =[]

const staredBook = (state= stateInit, action)=>{
  switch(action.type){
    case "ADD_STAR":
    return[
      ...state,
      {
        id:action.id,
        title:action.title,
        img:action.img
      }
    ]
    case "R_STAR":
    return state = []

    default:
    return state
  }
}
export default staredBook

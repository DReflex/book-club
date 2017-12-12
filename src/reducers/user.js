const stateInit={
  name:String,
  id:Number,
  loginStatus: false,
  img:String,
  bakcground:String,
  quote: String,
  author: String,
  editing:Boolean,
  stared: [String]
}
const user =(state = stateInit, action) => {
  switch(action.type){
    case 'LOGIN':
    return{
      ...state,
      name:action.name,
      id:action.id,
      loginStatus: action.loginStatus,
      img: action.img,
      editing:false

    }
    case 'LOGOUT':
    return{
      ...state,
       name:"",
       id:0,
       loginStatus:false,
       img:"",
       editing:false
     }
     case "PROFILE":
     return{
       ...state,
       name:action.name,
       img:action.img,
       bakcground:action.background,
       quote: action.quote,
       author: action.author,
       editing:false
     }
     case "TOGGLE_PROFILE":
     return{
       ...state,
       editing: !state.editing
     }
     case "STAR":
     return{
       ...state,
       stared: action.stared
     }
    default:
    return state
  }
}


export default user

const stateInit ={
  comment:"",
  background: "",
  quote: "",
  author:"",
  name: "",
  img: ""
}
const input =(state = stateInit, action) => {
  switch(action.type){
    case 'Q_COMMENT':
    return{
      ...state,
      comment: action.comment
    }
    case "R_COMMENT":
    return{
      ...state,
      comment:""
    }
    case "Q_QUOTE":
    return{
      ...state,
      quote: action.text,
    }
    case "Q_BACKGROUND":
    return{
      ...state,
      background: action.text,
    }
    case "Q_AUTHOR":
    return{
      ...state,
      author: action.text,
    }
    case "Q_NAME":
    return{
      ...state,
      name: action.text,
    }
    case "Q_IMG":
    return{
      ...state,
      img: action.text,
    }
    case "Q_RESET":
    return state = {
      comment:"",
      background: "",
      quote: "",
      author:"",
      name: "",
      img: ""
    }
    default:
    return state
  }
}


export default input

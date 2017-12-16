const stateInit ={
  search:""
}
const query =(state = stateInit, action) => {
  switch(action.type){
    case 'SEARCH':
    return{
      search: action.search
    }
    case "RESET_SEARCH":
    return{
      search:""
    }
    default:
    return state
  }
}


export default query

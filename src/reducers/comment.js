const stateInit =[]
const comment = (state= stateInit, action)=>{
  switch(action.type){
    case "COMMENT":
    return[
      ...state,
      {
      creator:action.creator,
      creator_id:action.creator_id,
      creator_img:action.creator_img,
      response:action.response,
      text:action.text,
      _id:action._id,
      up:action.up,
      down:action.down,
      vote: action.vote,
      res_query:"",
      showing:action.showing
    }]
    case "RESET_COMMENT":
    return state=[];
    case "Q_RES":
    return state.map(comment => (comment._id === action.id)?{
      ...comment,
      res_query: action.response
    }
    :comment
    )
    case "R_RES":
    return state.map(comment => (comment._id === action.id)?{
      ...comment,
      res_query: ""
    }
    :comment
    )
    case "RES_TOGGLE":

    return state.map(comment => (comment._id === action.id)?{
      ...comment,
      showing: action.showing
    }
    :comment
    )
    case "COM_VOTE":
    return state.map((comment)=>{
      if(comment._id === action.com_id){
        if(action.res_id === undefined){
          return{
            ...comment,
            vote:action.vote,
            up: action.up,
            down:action.down
          }
          }else{
            comment.response.map((response) =>{
              if(response._id === action.res_id){
                response.vote = action.vote;
                response.up = action.up,
                response.down = action.down
                return response
              }else{
                return response
              }

            })
            return comment
          }
        }
        else{
        return comment
      }

    })

    case "ADD_RES":
    return state.map((comment) => {
      if(comment._id === action.id){
        comment.response.push(action.response)
        return comment
      }else{
        return comment
      }
    })
    default:
    return state
  }
}
export default comment



export const userLogin =(data)=>{

  return{
    type:"LOGIN",
    img: data.img,
    name: data.name,
    id: data.id,
    loginStatus: data.loginStatus,
    stared: !data.stared? []: data.stared,
    author: !data.author? "": data.author,
    quote:!data.quote ? "": data.quote,
    background:!data.background? "": data.background,
  }
}
export const userLogout =() => {
  return{
    type:"LOGOUT"
  }
}
export const searchQuery = (search) =>{
  return{
    type: "SEARCH",
    search,
  }
}
export const resetQuery = () =>{
  return{
    type:"RESET_SEARCH"
  }
}
export const searchBook = (data)=>{
  return{
    type:"ADD_BOOK",
    id:data.id,
    title: data.title,
    author: data.author,
    link: data.link,
    img: data.img,
    desc: data.desc,
    selfLink: data.selfLink
  }
}
export const resetBook = ()=>{
  return{
    type:"RESET_BOOK"
  }
}
export const bookList = (data) =>{
  return{
    type:"BOOK_LIST",
    id: data.id,
    img:  data.img,
    title:  data.title,
    selfLink: data.selfLink
  }
}
export const resetList = ()=>{
  return{
    type:"RESET_LIST"
  }
}
export const detailBook = (data) =>{
  return{
    type:"DETAIL",
    title:data.title,
    subtitle:data.subtitle,
    img: data.img,
    author:data.author,
    categories:data.categories,
    link:data.link,
    desc:data.desc
  }
}
export const addComment = (action)=>{
  return{
    type:"COMMENT",
    creator:action.creator,
    creator_id:action.creator_id,
    response:action.response,
    text:action.text,
    _id:action._id,
    up:action.up,
    down:action.down,
    vote:action.vote,
    creator_img: action.creator_img,
    showing:false,
  }

}
export const resetComment = () =>{
  return{
    type:"RESET_COMMENT"
  }
}
//inputs
//

export const q_comment = (comment) =>{
  return{
    type:"Q_COMMENT",
    comment
  }
}
export const q_res = (id, response) =>{
  return{
    type:"Q_RES",
    id,
    response
  }
}
export const r_comment = () =>{
  return{
    type:"R_COMMENT"
  }
}
export const r_res = (id) =>{
  return{
    type:"R_RES",
    id
  }
}
export const res_toggle = (id, toggle) => {
  return{
    type: "RES_TOGGLE",
    id,
    showing: !toggle
  }
}
export const shrink_detail = () =>{
  return{
    type: "SHRINK_DETAIL"
  }
}
export const com_vote = (com_id, res_id, vote, up, down) =>{
  return{
    type: "COM_VOTE",
    com_id,
    res_id,
    vote,
    up,
    down
  }
}
export const add_res = (id, response) =>{
  return{
    type:"ADD_RES",
    id,
    response
  }
}
export const q_quote = (text) =>{
  return{
    type: "Q_QUOTE",
    text
  }
}
export const q_background = (text) =>{
  return{
    type: "Q_BACKGROUND",
    text
  }
}
export const q_author = (text) =>{
  return{
    type: "Q_AUTHOR",
    text
  }
}
export const toggleProfile = () => {
  return{
    type: "TOGGLE_PROFILE"
  }
}
export const q_name = (text) => {
  return{
    type: "Q_NAME",
    text
  }
}
export const q_img = (text) => {
  return{
    type: "Q_IMG",
    text
  }
}
export const q_reset = () =>{
  return{
    type:"Q_RESET"
  }
}
export const updateProfile = (action) => {
  return{
    type:"PROFILE",
    name:action.name,
    img:action.img,
    bakcground:action.background,
    quote: action.quote,
    author: action.author,
  }
}
export const star = (stared) => {
  return{
    type:"STAR",
    stared
  }
}
export const addStar = (action) => {
  return {
    type:"ADD_STAR",
    id:action.id,
    title:action.title,
    img:action.img
  }
}
export const r_star = () =>{
  return{
    type:"R_STAR"
  }
}

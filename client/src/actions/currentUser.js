export const setCurrentUser = (data) =>(dispatch)=>{
    dispatch( {
        type:'FETCH_CURRENT_USER',
        payload:data
    })
}

export default setCurrentUser;
// const initialState = {state:[], loading: true, error: null}
const usersReducer = (states=[], action)=>{
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload
        case 'UPDATE_PROFILE':
            return states.map((state)=>state._id===action.payload._id ? action.payload : state)
        default:
            return states
    }
}

export const oneUserReducer = (states=null, action)=>{
    switch (action.type){
        case 'ONE_USER':
            return action.payload
        default:
            return states
    }
}

export default usersReducer
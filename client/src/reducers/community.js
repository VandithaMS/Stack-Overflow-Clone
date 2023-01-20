export const Community = (states=[], action)=>{
    switch (action.type) {
        case "FETCH_USER_POSTS":
            return action.payload
        default:
            return states
    }
}

export const allPostReducer = (states=[], action)=>{
    switch (action.type) {
        case "ALL_POST":
            return action.payload
        default:
            return states
    }
}
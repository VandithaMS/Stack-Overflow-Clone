const getLikeReducer = (states=[], action)=>{
    switch (action) {
        case "GET_LIKE":
            return action.payload
        default:
            return states
    }
}

export default getLikeReducer
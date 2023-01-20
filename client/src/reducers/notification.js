const getNotificationReducer = (states=[], action)=>{
    switch (action.type) {
        case "GET_NOTIFICATION":
            return action.payload
    
        default:
            return states
    }
}

export default getNotificationReducer
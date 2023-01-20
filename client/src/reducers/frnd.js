const frndListReducer = (states=[], action)=>{
    switch (action.type) {
        case "FRND_LIST":
            return action.payload
        default:
            return states
    }
}

export const getReqReducer = (states=[], action)=>{
    switch (action.type) {
        case "GET_REQ":
            return action.payload
        default:
            return states
    }
}

export default frndListReducer
const planReducer = (state=null, action)=>{
    switch (action.type) {
        case "NUM_QUESTIONS":
            return action.payload
        default:
            return state
    }
}

export default planReducer;
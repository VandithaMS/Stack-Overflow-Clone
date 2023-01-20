export const OnePostReducer = (states=null,action)=>{
    switch (action.type) {
        case "ONE_POST":
            return action.payload
        default:
            return states
    }
}
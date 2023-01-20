import * as api from '../api'

export const fetchAllUsers = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchAllUsers()
        dispatch({type:'FETCH_USERS', payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (id,updateData)=> async(dispatch)=>{
    try {
        const {data} = await api.updateProfile(id,updateData)
        dispatch({type:'UPDATE_PROFILE', payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const oneUser =(id) =>async(dispatch)=>{
    try {
        const {data} = await api.oneUser(id)
        dispatch({type:"ONE_USER", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const frndList = (id) => async(dispatch)=>{
    try {
        const {data} = await api.frndList(id)
        dispatch({type:"FRND_LIST", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const addFrnd = (id1,id2)=>async(dispatch)=>{
    try {
        await api.addFrnd(id1,id2)
    } catch (error) {
        console.log(error)
    }
}
export const removeFrnd = (id1,id2)=>async(dispatch)=>{
    try {
        await api.remFrnd(id1,id2)
    } catch (error) {
        console.log(error)
    }
}

export const sendReq = (id1,id2)=>async(dispatch)=>{
    try {
        await api.sendReq(id1,id2)
    } catch (error) {
        console.log(error)
    }
}

export const getReq = (id) =>async(dispatch)=>{
    try {
        const data = await api.getReq(id)
        dispatch({type:"GET_REQ", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getNotification = (id) =>async(dispatch)=>{
    try {
        const data = await api.getNotif(id)
        dispatch({type:"GET_NOTIFICATION",payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const getCount = (id) =>async(dispatch)=>{
    try {
        const data = await api.getCount(id)
        dispatch({type:"GET_COUNT",payload:data})
    } catch (error) {
        console.log(error)
    }
}
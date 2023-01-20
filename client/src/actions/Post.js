import * as api from '../api'

export const AddPost = (id,postData, navigate) => async(dispatch)=>{
    try {
        const {data} = await api.addPost(postData)
        navigate(`/User/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserPosts = (id) => async(dispatch)=>{
    try {
        const {data} = await api.fetchUserPosts(id)
        dispatch({type:"FETCH_USER_POSTS", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const onePost = (id) =>async(dispatch)=>{
    try {
        // console.log("Post")
        const {data} = await api.onePost(id)
        dispatch({type:"ONE_POST", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const addLike=(id,like)=>async(dispatch)=>{
    try {
        await api.addLike(id,like)
    } catch (error) {
        console.log(error)
    }
}

export const remLike=(id,like)=>async(dispatch)=>{
    try {
        await api.remLike(id,like)
    } catch (error) {
        console.log(error)
    }
}

export const getLike=(id)=>async(dispatch)=>{
    try {
        const data = api.getLike(id)
        dispatch({type:"GET_LIKE",payload:data})
    } catch (error) {
        console.log(error)
    }
}


export const allPost = (user) => async(dispatch)=>{
    try {
        const data = await api.allPost(user)
        dispatch({type:"ALL_POST",payload:data})
    } catch (error) {
        console.log(error)
    }
}
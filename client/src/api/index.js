import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})
API.interceptors.request.use((req)=>{
    const profile = localStorage.getItem('Profile')
    if(profile){
        req.headers.authorization = `Bearer ${JSON.parse(profile).token}`
    }
    return req
})

export const logIn = (authData) => API.post('/user/login', authData)
export const signUp = (authData) => API.post('/user/signup', authData)

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get')
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id,value,userId) => API.patch(`/questions/vote/${id}`, {value, userId})

export const postAnswer = (id,noOfAns, ansBody, userAns, userId) => API.patch(`/answer/post/${id}`,{ noOfAns, ansBody, userAns, userId})
export const deleteAnswer = (id, ansId, noOfAns) => API.patch(`/answer/delete/${id}`, { ansId, noOfAns})

export const fetchAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id,updateData) => API.patch(`/user/update/${id}`, updateData)
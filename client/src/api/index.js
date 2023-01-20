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

export const checkPlan = (id) => API.post('/plan/checkplan',{userId:id})
export const checkNumQuestions = (id) => API.post('/plan/checknum', {userId:id})
export const addPlan = (userId,plan)=>API.post('/plan/addplan', {userId:userId,plan:plan})

export const addPost = (postData) => API.post('/user/post', postData)
export const fetchUserPosts = (id) => API.get(`/user/post/${id}`)
export const onePost = (id) => API.get(`/post/${id}`)
export const oneUser = (id) =>API.get(`/user/${id}`)

export const frndList = (id) =>API.get(`/user/frnd/${id}`)
export const addFrnd = (userId, frndId) =>API.post('/add', {user:userId, frnd:frndId})
export const remFrnd = (userId, frndId) =>API.post('/remove', {user:userId, frnd:frndId})

export const sendReq = (sen, rec) =>API.post('/user/sendReq',{sen,rec})
export const getNotif = (id) =>API.get(`/user/notif/${id}`)
export const getCount = (id) =>API.get(`/user/count/${id}`)
export const getReq = (id) =>API.get(`/user/req/${id}`)
export const addLike = (id,like) =>API.post(`/post/like`,{id:id,like:like})
export const remLike = (id,like) =>API.post(`/post/unlike`,{id:id,like:like})
export const getLike = (id) =>API.get(`/post/like/${id}`)

export const allPost = (user)=>API.post('/post/all',{id:user})

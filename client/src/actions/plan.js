import * as api from '../api'

// var plan='';
export const checkPlan = (id) => async(dispatch)=>{
    try {
        const {data} = await api.checkPlan(id)
        dispatch({type:"CHECK_PLAN", payload:data})
        localStorage.setItem('Plan', data)
    } catch (error) {
        console.log(error)
    }
}

export const checkNumQuestions=(userId)=>async(dispatch)=>{
    try {
        const {data} = await api.checkNumQuestions(userId)
        dispatch({type:"NUM_QUESTIONS", payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const addPlan = (userId, plan) => async(dispatch)=>{
    try {
      await api.addPlan(userId,plan)
      dispatch(checkPlan(userId))
    } catch (error) {
      console.log(error)
    }
  }


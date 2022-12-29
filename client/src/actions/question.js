import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
      const {data} = await api.postQuestion(questionData)
      dispatch({type:"POST_QUESTION", payload:data})
      dispatch(fetchAllQuestions())
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}

export const fetchAllQuestions = () => async (dispatch) =>{
  try {
    const {data} = await api.getAllQuestions()
    dispatch({type:"FETCH_ALL_QUESTIONS", payload:data})
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuestion = (id, navigate) => async(dispatch) =>{
  try {
    await api.deleteQuestion(id)
    dispatch(fetchAllQuestions())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const voteQuestion = (id, value, userId) => async(dispatch)=>{
  try {
    await api.voteQuestion(id, value, userId)
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const postAnswers = (answerData) => async (dispatch) =>{
  try {
    const {id,noOfAns, ansBody, userAns, userId} = answerData
    const {data} = await api.postAnswer(id,noOfAns, ansBody, userAns, userId)
    dispatch({type:"POST_ANSWER", payload:data})
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnswer =(id, ansId, noOfAns) => async(dispatch)=>{
  try {
    await api.deleteAnswer(id,ansId,noOfAns)
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export default askQuestion
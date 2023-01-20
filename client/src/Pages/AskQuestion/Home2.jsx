import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPlan } from '../../actions/plan'
import askQuestion from '../../actions/question'

const Home2 = () => {
	const navigate = useNavigate()
    const location = useLocation()
    const User = useSelector(state=>state.currentUserReducer)
	const dispatch = useDispatch()
	var Publishable_Key = process.env.PUBLIC_KEY
	const handleSubmit=()=>{
		dispatch(addPlan(User?.result?._id, 2))
		if(location.state){
		dispatch(askQuestion(location.state,navigate))
		}else{
			navigate('/')
		}
	}
  return (
	<div className='home2-div'>
		<h3> Payment Gateway</h3>
		<form onSubmit={handleSubmit} method="POST">
		<script
		src="//checkout.stripe.com/v2/checkout.js"
		class="stripe-button"
		data-key={Publishable_Key}
		data-amount="10000"
		data-currency="inr"
		data-name="Vanditha"
		data-description="Stack Over Flow Clone"
		data-locale="auto" >
		</script>
		</form>
		<button onClick={()=>navigate(-1)} type='button'>Back</button>
	</div>
  )
}

export default Home2
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Routess from './Routess';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routess />
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Homepage/Home';
import Recorder from './Components/Recorder/Recorder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Recorder' element={<Recorder/>}/>
        {/* <Route path='/*' element={<ErrorPage />}/> */}
      </Routes>
    </div>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from '../../pages/Home/Home'
import { SignUp } from '../../pages/SignUp/SignUp'
import { LogIn } from '../../pages/LogIn/LogIn'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<LogIn />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

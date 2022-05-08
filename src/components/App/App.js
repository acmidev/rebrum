import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from '../../pages/Home/Home'
import { SignUp } from '../../pages/SignUp/SignUp'
import { LogIn } from '../../pages/LogIn/LogIn'
import { Profile } from '../../pages/profile/Profile'
import  { AuthProvider } from '../../contexts/AuthContext'
import PrivateRoute from '../privateRoute/PrivateRoute'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

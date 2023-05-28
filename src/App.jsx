import React from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import About from '../Routes/About'
import Home from '../Routes/Home'
import Contact from '../Routes/Contact'
import Service from '../Routes/Service'
import SignUp from '../Routes/SignUp'
import '../src/Styles/Style.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/services' element={<Service/>} />
<Route path='/contacts' element={<Contact/>} />
<Route path='/signup' element={<SignUp/>} />
</Routes>
    </div>
  )
}

export default App

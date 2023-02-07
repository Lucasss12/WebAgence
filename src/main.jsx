import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Works from './Pages/Works/Works'
import Navbar from './components/Navbar/Navbar'
import StudyCase from './components/StudyCase/StudyCase'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style/style.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/works' element={<Works/>}></Route>
      <Route path='/works/:projectname-study-case' element={<StudyCase />} /> </Routes>
  </BrowserRouter>
)
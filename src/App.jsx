import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'
import AboutPage from './Pages/AboutPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>

        <Route path='/login' element={<LoginPage/>}/>

        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App

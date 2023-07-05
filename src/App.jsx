import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>

        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App

import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'

function App() {

  const [token, setToken] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage token={token}/>}/>

        <Route path='/login' element={<LoginPage setToken={setToken}/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App

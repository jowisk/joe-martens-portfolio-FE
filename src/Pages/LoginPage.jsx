import React from 'react'
import Login from '../components/UI/organisms/Login/Login'

const LoginPage = ({ setToken }) => {
  return (
    <Login
      setToken={setToken}
    />
  )
}

export default LoginPage
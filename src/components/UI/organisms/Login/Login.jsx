import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../../API'
import { Header, CurvesHeader, CurvesFooter, Footer } from '../../../../index'

import Eye from '../../atoms/Eye'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('password')
    const [isVisible, setIsVisible] = useState(false)
    const [isValidUser, setIsValidUser] = useState()
    const [isValidPassword, setIsValidPassword] = useState()

    const navigate = useNavigate()

    const onChangeUserHandler = (e) => {
        setUsername(e.target.value)
    }
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onClickTypeHandler = (e) => {
        if (type === 'password') {
            setType('text')
            setIsVisible(false)
        } else if (type === 'text') {
            setType('password')
            setIsVisible(true)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let res = await login(username, password)
            if (res == 'Invalid user') {
                setIsValidUser(false)
            } else if (res == 'Invalid password') {
                setIsValidPassword(false)
            } else {
                setIsValidUser(true)
                setIsValidPassword(true)
                localStorage.setItem('auth-token', res.token)
                navigate('/')
            }
        } catch {
            
        }
    }

    return (
        <div className='h-full relative'>
            <Header
                name="jowisk"
            />

            <CurvesHeader />

            <div className='p-[251.5px] h-full flex items-center justify-center'>
                <form onSubmit={submitHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor="">Username</label>
                        {isValidUser ? <input onChange={onChangeUserHandler} className="lowercase outline-0 w-[430px] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="" /> :  <input onChange={onChangeUserHandler} className="lowercase outline-0 w-[430px] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-red-500 bg-[#242424]" type="text" placeholder="" />}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <div className='flex'>
                            {isValidPassword ? <input onChange={onChangePasswordHandler} className="outline-0 w-[380px] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-white bg-[#242424]" type={type} placeholder=""></input> : <input onChange={onChangePasswordHandler} className="outline-0 w-[380px] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-red-500 bg-[#242424]" type={type} placeholder=""></input>}
                            <div className='w-[50px] bg-[#242424] flex items-center justify-center h-[57px] border-b-[1px] border-white relative'>
                                <Eye
                                    onClickTypeHandler={onClickTypeHandler}
                                    isVisible={isVisible}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="leading-[26px] tracking-[2.29px] font-[700] text-[40px] mt-[32px] hover:text-red-500 transition duration-300 hover:ease-in shake" type="submit">Log in</button>
                </form>
            </div>

            <div className='absolute w-full bottom-0'>
                <CurvesFooter />
                    
                <Footer
                    name="jowisk"
                />
            </div>
        </div>
    )
}

export default Login
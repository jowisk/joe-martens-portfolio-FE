import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, CurvesHeader, CurvesFooter, Footer } from '../../../../index'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../../API/firebase'

import Eye from '../../atoms/Eye'
const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('password')
    const [isVisible, setIsVisible] = useState(false)

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
            setIsVisible(true)
        } else if (type === 'text') {
            setType('password')
            setIsVisible(false)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
    
        try{
          await signInWithEmailAndPassword(auth, email, password)
          navigate('/')
        } catch (err) {
          setErr(true)
        }
    }

    useEffect(() => {
        setIsVisible(false)
    }, [])

    return (
        <>
                <Header
                    name="jowisk"
                />

                <CurvesHeader />

                <div className='p-[251.5px] h-[644px] flex items-center justify-center'>
                    <form onSubmit={submitHandler}>
                        <div className='flex flex-col'>
                            <label htmlFor="">Username</label>
                            <input onChange={onChangeUserHandler} className="lowercase outline-0 w-[430px] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="" /> 
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Password</label>
                            <div className='flex'>
                                <input onChange={onChangePasswordHandler} className="outline-0 w-[380px] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-white bg-[#242424]" type={type} placeholder=""></input>
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
            
            <CurvesFooter />
                
            <Footer
                name="jowisk"
            />
        </>
    )
}

export default Login
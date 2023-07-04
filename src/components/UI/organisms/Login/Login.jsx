import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../../API'
import { Header, CurvesHeader, CurvesFooter, Footer } from '../../../../index'

const Login = ({ setToken }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onChangeUserHandler = (e) => {
        setUsername(e.target.value)
    }
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let res = await login(username, password)
            if (res == 'Invalid credentials') {
                alert('wrong user or password')
            } else {
                setToken(res.token)
                navigate('/')
            }
        } catch {
            
        }
    }

    return (
        <>
            <Header
                name="jowisk"
            />

            <CurvesHeader />

            <div className='p-[250px] h-full'>
                <form onSubmit={submitHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor="">Username</label>
                        <input onChange={onChangeUserHandler} className="lowercase outline-0 w-[47%] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="" /> 
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <input onChange={onChangePasswordHandler} className="outline-0 w-[47%] pl-[24px] py-[16px] mb-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="" /> 
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
        </>
    )
}

export default Login
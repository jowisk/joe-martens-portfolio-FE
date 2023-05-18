import { React, useState } from 'react'
import { sendEmail } from '../../../../API/index'
import ResponseRecorded from './ResponseRecorded'
const Contact = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidSubject, setIsValidSubject] = useState(false)
    const [isValidMessage, setIsValidMessage] = useState(false)

    const [formVisibility, setFormVisibility] = useState(true)

    const changeEmailHandler = (e) => {
        setEmail(e.target.value)

        const emailRegex = /[A-Za-z0-9._+-]+@[A-Za-z0-9]+\.[a-z]{2,}$/
        setIsValidEmail(emailRegex.test(e.target.value))
    }
    const changeSubjectHandler = (e) => {
        setSubject(e.target.value)
        setIsValidSubject(e.target.value.length !== 0)
    }
    const changeMessageHandler = (e) => {
        setMessage(e.target.value)
        setIsValidMessage(e.target.value.length !== 0)
    }


    const submitHandler = (e) => {
        e.preventDefault();
        sendEmail(email, subject, message)
        setEmail('')
        setMessage('')
        setSubject('')
        setFormVisibility(false)
    }


    return (
        formVisibility ?
            <article className="bg-[#242424] px-[16px] md:px-[165px] flex flex-col lg:flex-row pt-[60px] lg:pt-[84px] justify-between border-b-[1px] lg:border-none border-white pb-[70px] lg:[px-0] min-h-[521px]" id="contact">
                <div>
                    <p className="text-[40px] leading-[40px] text-center tracking-[-1.14px] lg:text-start lg:text-[88px] font-[700] lg:tracking-[-2.5px] lg:leading-[88px]">Contact</p>
                    <p className="text-center mt-[20px] lg:text-start leading-[26px] lg:w-[445px] lg:mt-[36px] lg:text-[18px] lg:leading-[28px] text-[#D9D9D9]">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={submitHandler} method="post" className="mt-[50px] mb-[20px] lg:mb-0 lg:mt-0 flex flex-col lg:w-[637px] lg:h-[366px] tracking-[-0.22px] items-end">
                    <input
                        name="email"
                        value={email}
                        onChange={changeEmailHandler}
                        className="outline-0 w-full pl-[24px] py-[16px] border-b-[1px] border-white bg-[#242424]"
                        type="email"
                        placeholder="EMAIL"
                        required={true}
                    />
                    {!isValidEmail && <p className="text-red-500 absolute mt-[65px] z-[2]">Please enter a valid email.</p>}
                    <input name="subject" value={subject} onChange={changeSubjectHandler} className="outline-0 w-full pl-[24px] py-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="SUBJECT" required={true} />
                    <textarea name="message" value={message} onChange={changeMessageHandler} className="outline-0 w-full pl-[24px] min-h-[115px] pt-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="MESSAGE" required={true} />
                    {(isValidEmail && isValidSubject && isValidMessage) ? <button disabled={!isValidEmail} className="leading-[26px] tracking-[2.29px] font-[700] mt-[32px] hover-underline-animation" type="submit">SEND MESSAGE</button> :
                        <button disabled={!isValidEmail} className="leading-[26px] tracking-[2.29px] font-[700] mt-[32px] hover:text-red-500 transition duration-300 hover:ease-in shake" type="submit">SEND MESSAGE</button>}
                </form>

            </article> :
            <ResponseRecorded />

    )
}

export default Contact
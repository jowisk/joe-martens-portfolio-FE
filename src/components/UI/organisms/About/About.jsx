import React from 'react'
import Header from '../../molecules/Header/Header'
import CurvesHeader from '../design/CurvesHeader'
import CurvesFooter from '../design/CurvesFooter'
import Footer from '../../molecules/Footer/Footer'


const About = () => {
  return (
    <>
        <Header
            name="jowisk"
        />

        <CurvesHeader />

        <div className='lg:p-[250px] p-[40px] lg:h-[644px] h-[715px] flex flex-col items-start justify-center'>
            <h1 className='lg:text-[50px] text-[30px] font-bold'>About this project</h1>
            <p className='lg:text-[25px]  mt-[15px]'>
                This portfolio and CV web app is a sleek and efficient tool crafted with a React front end that allows for seamless navigation and interaction. 
                The app employs a CRUD (Create, Read, Update, Delete) model to add, view, and remove projects directly within the application.
                This model is made using Firebase Auth, Firebase Storage and Firestore Database.
            </p>
        </div>
        
        <CurvesFooter />
            
        <Footer
            name="jowisk"
        />
    </>
  )
    }
export default About
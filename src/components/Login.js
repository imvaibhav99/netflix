import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {

    const [isSignInForm,setIsSignInForm]= useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
        alt="logo"
        /> 
        </div>
        <form className='w-3/12  absolute p-12 bg-black my-36 mx-auto right-8 left-0 text-white bg-opacity-80'> 
        <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In": "Sign Up"}
            </h1>
            {!isSignInForm && (
                <input 
                type="Fullname" placeholder='Fullname' className='p-4 my-4 w-full bg-gray-700'
                />
            )}
            <input 
            type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'
            />
            
            <input 
            type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'
            />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
            {isSignInForm ? "Sign In": "Sign Up"}
            </button>
            <p className='py-4 cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In Now.."}</p>
        </form>
    </div>
  )
} 
export default Login

import React, { useEffect, useState } from 'react'
import google from '../assets/img/google-icon.svg'
import closeIcon from '../assets/img/close-icon.svg'
import hamburger from '../assets/img/hamburger-img.png'
import logo from '../assets/img/Logo.svg'

const Login = ({setLogin}) => {

    const [loginState, setLoginState] = useState('login')
    const [zoomed, setZoomed] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setZoomed(true)
        }, 50)

        return () => clearTimeout(timeoutId)
    }, [])

    const updateLoginState = () => {
        setLoginState(() => {
            return(
                loginState === 'login' ? 'signup' : 'login'
            )
        })
    }

  return (
    <div className='login-dialog'>
        <div className={`login-container ${zoomed? 'zoomed' : ''}`}>
            <div className={`login-imgbx ${zoomed? 'zoomed' : ''}`}>
                <img alt='login-img' src={hamburger} />
            </div>
            <div className={`form-container ${zoomed? 'zoomed' : ''}`}>
                <h2 className={`login-text ${zoomed? 'zoomed' : ''}`}>{loginState === 'login' ? 'Sign In' : 'Signup'}</h2>
                <form className={`login-form ${zoomed? 'zoomed' : ''}`}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' className={`login-input ${zoomed? 'zoomed' : ''}`} name='email' type='email' required />
                    <label htmlFor='password'>Password</label>
                    <input id='password' className={`login-input ${zoomed? 'zoomed' : ''}`} name='password' type='password' min={8} required />
                    <div className='forgetpwd-bx'>
                        {loginState === 'login' && <p className='forgetpwd'>Forgot Password?</p>}
                    </div>
                    {
                        loginState === 'signup' &&
                        <>
                            <label htmlFor='confirmPassword' className='confirmpwd'>Confirm Password</label>
                            <input id='confirmPassword' className={`login-input ${zoomed? 'zoomed' : ''}`} name='confirmPassword' type='password' min={8} required />
                        </>
                    }
                    <button className={`form-button ${zoomed? 'zoomed' : ''}`} type='submit'>
                        {loginState === 'login' ? 'Sign In' :  'Sign Up'}
                    </button>
                </form>
                <p className={`optional-text ${zoomed? 'zoomed' : ''}`}>Or {loginState === 'signup' ? 'Signup' : 'continue'} with</p>
                <div className={`google-icon ${zoomed? 'zoomed' : ''}`}>
                    <img src={google} alt='google-icon' />
                </div>
                {
                    <p className={`signup-text ${zoomed? 'zoomed' : ''}`} onClick={updateLoginState}>
                        {loginState === 'login' ? 'New to little lemon? ' : 'Already have an account? '} <span className={`signup ${zoomed? 'zoomed' : ''}`}>
                            {loginState === 'login' ? 'Signup' : 'Login'}
                        </span>
                    </p>
                }
            </div>
        </div>
        <div className='close-button' onClick={setLogin}>
            <img width={"30"} src={closeIcon} />
        </div>
    </div>
  )
}

export default Login
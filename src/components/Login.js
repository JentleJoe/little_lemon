import React from 'react'
import google from '../assets/img/google-icon.svg'
import closeIcon from '../assets/img/close-icon.svg'
import hamburger from '../assets/img/hamburger-img.png'

const Login = ({setLogin}) => {
  return (
    <div className='login-dialog'>
        <div className='login-container'>
            <div className='login-imgbx'>
                <img alt='login-img' width={"300"} src={hamburger} />
            </div>
            <div className='form-container'>
                <h2 className='login-text'>Login</h2>
                <form className='login-form'>
                    <label htmlFor='email'>Email</label>
                    <input className='login-input' name='email' type='email' required />
                    <label htmlFor='password'>Password</label>
                    <input className='login-input' name='password' type='password' required />
                    <div className='forgetpwd-bx'>
                        <p className='forgetpwd'>Forgot Password?</p>
                    </div>
                    <button className='form-button' type='submit'>Sign In</button>
                </form>
                <p className='optional-text'>Or continue with</p>
                <div className='google-icon'>
                    <img src={google} width={"28"} alt='google-icon' />
                </div>
                <p className='signup-text'>
                    New to little lemon? <span className='signup'>Signup</span>
                </p>
            </div>
        </div>
        <div className='close-button' onClick={setLogin}>
            <img width={"30"} src={closeIcon} />
        </div>
    </div>
  )
}

export default Login
import React, { useEffect, useState } from 'react'
import google from '../assets/img/google-icon.svg'
import closeIcon from '../assets/img/close-icon.svg'
import hamburger from '../assets/img/hamburger-img.png'
import Dialog from './Dialog'
import { dialogBox } from '../constants'

const Login = ({setLogin, userLogin, setUserLogin, login}) => {

    const [loginState, setLoginState] = useState('login')
    const [zoomed, setZoomed] = useState(false)
    const [formData, setFormData] = useState({})
    const [showDialog, setShowDialog] = useState(false)
    const [dialogStyle, setDialogStyle] = useState('')

    const alertMessage = dialogBox.loginSuccess.text
    const alertColor = dialogBox.loginSuccess.color

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevData) => {
            return({
                ...prevData,
                [name] : value
            })
        } )
    }

    const handleDialog = () => {
        !showDialog && setShowDialog((prev) => !prev) //displays dialog
        setDialogStyle("none") //hides login component
        setTimeout(() => {
            setShowDialog((prev) => !prev)  //displays dialog
            login && setLogin() //unmounts login compoment
            // clearForm() // not necessary since component already unmounted
        }, 1000);
        // setShowDialog((prev) => !prev)
        // clear form function
    }

    const clearForm = () => {
        setFormData({
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        if (loginState === 'signup'){
            if (formData.password !== formData.confirmPassword){
                console.log("passwords\'s dont match")
                //Give user feedback
                return
            }
            console.log("passwords match")
        }
        // Set login state to true and change nav and footer login value to logout
        // When login state is True, reservations should submit successfully
        setUserLogin((prevState) => !prevState)
        setLogin()
        handleDialog()
        // clearForm() //Already contained in handleDialog function
        // login && setLogin() //unmounts login compoment
    }

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
    <>
    {showDialog && <Dialog text={alertMessage} color={alertColor}/>}
    <div className={`login-dialog ${dialogStyle}`}>
        <div className={`login-container ${zoomed? 'zoomed' : ''}`}>
            <div className={`login-imgbx ${zoomed? 'zoomed' : ''}`}>
                <img alt='login-img' src={hamburger} />
            </div>
            <div className={`form-container ${zoomed? 'zoomed' : ''}`}>
                <h2 className={`login-text ${zoomed? 'zoomed' : ''}`}>{loginState === 'login' ? 'Sign In' : 'Signup'}</h2>
                <form className={`login-form ${zoomed? 'zoomed' : ''}`} onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleChange} id='email' className={`login-input ${zoomed? 'zoomed' : ''}`}
                     name='email' type='email' required value={formData.email} />
                    <label htmlFor='password'>Password</label>
                    <input onChange={handleChange} id='password' className={`login-input ${zoomed? 'zoomed' : ''}`}
                     name='password' type='password' min={8} value={formData.password} required />
                    <div className='forgetpwd-bx'>
                        {loginState === 'login' && <p className='forgetpwd'>Forgot Password?</p>}
                    </div>
                    {
                        loginState === 'signup' &&
                        <>
                            <label htmlFor='confirmPassword' className='confirmpwd'>Confirm Password</label>
                            <input onChange={handleChange} id='confirmPassword' className={`login-input ${zoomed? 'zoomed' : ''}`}
                             name='confirmPassword' type='password' value={formData.confirmPassword} min={8} required />
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
    </>
  )
}

export default Login
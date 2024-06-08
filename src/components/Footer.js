import React from 'react'
import {footerLinks} from '../constants'
import restaurant from '../assets/img/restauranfood.jpg'
import hamburger from '../assets/img/hamburger-img.png'

function Footer({toggleIconClose, handleLogin, userLogin}) {
  return (
    <section className="footer-section">
        <div className='footer-content' >
            <div className="footer-imgbx">
                    <img className='footer-img' src={hamburger} alt="logo" />
            </div>
            <div className="footerlink-container">
                {/* <div className="footer-imgbx">
                    <img className='footer-img' src={hamburger} alt="logo" />
                </div> */}
                {
                    footerLinks.map((content, index) => {
                    return(
                        <div key={content.title} className={`footerlink-bx ${index !== footerLinks.length - 1 ? 'lg' : ''}`}>
                        <p className="footlink-head">
                            {content.title}
                        </p>
                        <div className='footlink-body'>
                            {
                            content.links.map((item, index) => {
                                return(
                                    item.name === 'Login' ?
                                    <p key={item.name} onClick={handleLogin} className={`footlink-text login ${userLogin === true && 'logout'}`}>
                                        <span onClick={toggleIconClose}>{`${userLogin === false ? 'Login' : 'Logout'}`}</span>
                                    </p>
                                    :
                                    <a key={item.name} href={item.link} target="" onClick={toggleIconClose}>
                                        <p className={`footlink-text`}>{item.name}</p>
                                    </a>
                                )
                            })
                            }
                        </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
        <div className='ft-bottom'>
            <div className='ft-line'></div>
            <p className='ftb-text'>Copyright ©️ 2024 Little Lemon</p>
            <p className='ftb-text'>Created by Joshua Oseghale</p>
            <p className='ftb-text'>Social Media Links</p>
        </div>
    </section>
  )
}

export default Footer
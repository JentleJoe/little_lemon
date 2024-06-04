import React from 'react'
import {footerLinks} from '../constants'
import restaurant from '../assets/img/restauranfood.jpg'
import hamburger from '../assets/img/hamburger-img.png'

function Footer({toggleIconClose, setLogin, userLogin}) {
  return (
    <section className="footer-section">
        <div className='footer-content' >
            <div className="footerlink-container">
            <div className="footer-imgbx">
                <img className='footer-img' src={hamburger} alt="logo" />
            </div>
            {
                footerLinks.map((content) => {
                return(
                    <div key={content.title} className="footerlink-bx">
                    <p className="footlink-head">
                        {content.title}
                    </p>
                    <div className='footlink-body'>
                        {
                        content.links.map((item, index) => {
                            return(
                                item.name === 'Login' ?
                                <p key={item.name} onClick={setLogin} className={`footlink-text login ${userLogin === true && 'logout'}`}>
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
    </section>
  )
}

export default Footer
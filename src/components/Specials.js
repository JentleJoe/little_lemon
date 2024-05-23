import React from 'react'
import Button from './Button'
import Card from './Card'
import { cardInfo } from '../constants'

function Specials({toggleIconClose}) {
    return (
        <section className='specials-section' id='menu'>
            <div className='specials-content'>
                <div className='specials-heading'>
                    <h3>Specials</h3>
                    <Button text={"Online Menu"} />
                </div>
                <div className='specials-body'>
                    <div className='card-container'>
                        {
                            cardInfo.map((card, index) => {
                                return(
                                    <Card key={index} img={card.img} meal={card.meal} price={card.price} details={card.details} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specials
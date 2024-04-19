import React from 'react'
import Button from './Button'
import Card from './Card'
import greekSalad from '../assets/img/greek salad.jpg'
import bruchetta from '../assets/img/bruchetta.svg'
import lemonDessert from '../assets/img/lemon dessert.jpg'

function Specials() {

    const cardInfo = [
        {
            img: greekSalad,
            meal: 'Greek Salad',
            price: '$12.99',
            details: 'The famous Greek salad of crispy lettuce, peppers, olives\
             and our Chicago... Our Bruschetta is made from grilled bread that \
             has been smeared with garlic....'
        },
        {
            img: bruchetta,
            meal: 'Bruschetta',
            price: "$12.99",
            details: 'The famous Greek salad of crispy lettuce, peppers, olives\
             and our Chicago... Our Bruschetta is made from grilled bread that \
             has been smeared with garlic....'
        },
        {
            img: lemonDessert,
            meal: 'Lemon Dessert',
            price: "$12.99",
            details: 'The famous Greek salad of crispy lettuce, peppers, olives\
             and our Chicago... Our Bruschetta is made from grilled bread that \
             has been smeared with garlic....'
        }
    ]

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
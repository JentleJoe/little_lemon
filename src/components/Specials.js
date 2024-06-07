import React, { useEffect, useState } from 'react'
import Button from './Button'
import Card from './Card'
import { cardInfo } from '../constants'

function Specials({toggleIconClose}) {

    const calculateNumcards = () => {
        if (window.innerWidth >= 1100){
            return 3
        }
        else if (window.innerWidth < 1100 && window.innerWidth >= 560){
            return 2
        }
        else if (window.innerWidth < 560) {
            return 1
        }
    }
    const [numCards, setNumCards] = useState(calculateNumcards)

    // state to duplicate card and re-order card
    // state that would be mapped over

    useEffect(() => {
        const handleResize = () => {
            setNumCards(calculateNumcards())
        }
        console.log(numCards)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    },
    [window.innerWidth])

    // create two arrays:
    // Duplicate card in array1
    // Array 2 would contain starting index of the content of array 1,
    // depending on the viewwport
    // set loop timer to alter the posisions of Array 1 so that the contents
    // of array 2 changes dynamically
    // Array 2 would be mapped over

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
                                    <Card key={index} img={card.img} meal={card.meal}
                                    price={card.price} details={card.details} />
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
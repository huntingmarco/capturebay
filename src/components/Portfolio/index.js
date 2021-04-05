import React from 'react'
import CardItem from './CarItem'
import './Card.css'
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import photo6 from './images/photo6.jpg';

function Portfolio() {
    return (
        <div className='cards'>
            <h1>Check out our services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src={photo1}
                            text='Explore the hidden waterfall deep
                            inside the Amazon Jungle'
                            label='Photo Services'
                            path='/photo'
                        />
                        <CardItem 
                            src={photo2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Photo Services'
                            path='/video'
                        />
                        <CardItem 
                            src={photo3}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Photo Services'
                            path='/video'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src={photo4}
                            text='Set Sail in the Atlantic Ocean visiting Un'
                            label='Photo Services'
                            path='/promotion'
                        />
                        <CardItem 
                            src={photo5}
                            text='Experience Football on Top of the Himalayan Mountains'
                            label='Photo Services'
                            path='/commercial'
                        />
                        <CardItem 
                            src={photo6}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Photo Services'
                            path='/livestream'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

import React from 'react'
import CardItem from './CarItem'
import './CardVideo.css'

function PortfolioVideo() {
    return (
        <div className='cards'>
            <h1>Video Services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            text='Explore the hidden waterfall deep
                            inside the Amazon Jungle'
                            label='Photo Services'
                            path='/photo'>
                            
                        </CardItem>
                        
                        <CardItem 
                            text='Explore the hidden waterfall deep
                            inside the Amazon Jungle'
                            label='Photo Services'
                            path='/photo'>
                            
                        </CardItem>

                        
                    </ul>
                    <ul className='cards__items'>
                    <CardItem 
                            text='Explore the hidden waterfall deep
                            inside the Amazon Jungle'
                            label='Photo Services'
                            path='/photo'>
                            
                        </CardItem>
                        
                        <CardItem 
                            text='Explore the hidden waterfall deep
                            inside the Amazon Jungle'
                            label='Photo Services'
                            path='/photo'>
                            
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PortfolioVideo

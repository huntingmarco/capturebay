import React from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from "react-player";

function CarItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__linkv' to={props.path}>
                    <figure className='cards__item__pic-wrapv' data-category={props.label}>
                            <ReactPlayer
                                url="https://youtu.be/3eLrINg3O2Q"
                                className="react-player"
                                // playing
                                width="100%"
                                height="100%"
                                controls={false}
                            />
                    </figure> 
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CarItem

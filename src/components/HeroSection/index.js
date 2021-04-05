import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import HomeImg from '../../images/img-home.jpg';

import {Button} from '../ButtonElements';
import {HeroContainer, 
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight} from './HeroElements'

const HeroElements = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer id="home">
            {/* <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg> */}
            <HeroBg src={HomeImg}/>
            <HeroContent>
                <HeroH1>Photography & Video Production </HeroH1>
                <HeroP>
                Sign up for a new account today and receive $250 in credit towards
                your next payment.
                </HeroP>
                <HeroBtnWrapper>
                <Button
                    to='signup'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary='true'
                    dark='true'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroElements;
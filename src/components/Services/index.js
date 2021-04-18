import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';
import {
  Link
} from "react-router-dom";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
      <Link to="/contactus">
        <ServicesCard >
          <ServicesIcon src={Icon1} to='/contactus' />
          <ServicesH2>PHOTO PRODUCTION</ServicesH2>
          <ServicesP>
          We capture images to seize moments and make a powerful impact.
          </ServicesP>
        </ServicesCard>
        </Link>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>VIDEO PRODUCTION</ServicesH2>
          <ServicesP>
          Our team of creators are especially trained to bring out strong and compelling content.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Special Event Livestream</ServicesH2>
          <ServicesP>
          Our production team is ready to livestream your event to reach your target audience.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Graphics Creation</ServicesH2>
          <ServicesP>
          Our talented graphics design team is ready to make still and motion graphics that suit your needs.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

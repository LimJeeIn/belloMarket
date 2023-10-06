import React from 'react';
import styled from 'styled-components';
import runningShoes from '../assets/image/new_main_running_shoes.gif';

const BannerSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 50vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const Heading1 = styled.h1`
  font-size: 1.75rem;
  color: white;

  @media (min-width: 1024px) {
    font-size: 5rem;
  }

  @media (min-width: 1536px) {
    font-size: 7rem;
  }
`;

const Banner: React.FC = () => {
  return (
    <BannerSection>
      <ImageContainer>
        <Image src={runningShoes} alt="running_shoes" />
        <TextContainer>
          <Heading1>RUN WITH YOUR STYLE</Heading1>
        </TextContainer>
      </ImageContainer>
    </BannerSection>
  );
};
export default Banner;

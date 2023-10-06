import React from 'react';
import logo from '../assets/image/logo.png';
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: #f3f4f6;
  margin-top: 10rem;
`;

const FooterWrapper = styled.div`
  max-width: 1536px;
  margin: auto;
`;

const TopWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding: 2.5rem;
  column-gap: 12rem;
  border-bottom-width: 1px;
  border-bottom: solid thin #ddd;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 2.5rem; // p-10
  }

  @media (min-width: 768px) {
  }
`;

const EmailTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1rem;
`;

const EmailInput = styled.div`
  margin-top: 1rem;
`;

const Input = styled.input`
  height: 3rem;
  line-height: 1.75rem;
  background-color: #e5e7eb;
  color: #6b7280;
  border-color: transparent;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  border-width: 1px;
  outline: 2px solid transparent;
`;

const ServiceTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1rem;
  margin-top: 2.2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const ServiceInfo = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const ServiceTime = styled.p`
  margin-top: 0.75rem;
  margin-bottom: 0.625rem;
`;

const ServiceContent = styled.p`
  margin-bottom: 0.625rem;
`;

const FollowWrapper = styled.ul`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const FollowInsta = styled.li`
  margin-top: 0.75rem;
  margin-bottom: 0.625rem;
`;

const FollowIcon = styled.span`
  display: inline-block;
  font-size: 1.125rem;
  vertical-align: middle;
`;

const FollowName = styled.p`
  margin-left: 0.375rem;
  display: inline-block;
`;

const BottomWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 2.5rem;
  column-gap: 12rem;

  @media (min-width: 768px) {
  }
`;

const BottomLogo = styled.li`
  grid-column: span 3 / span 3;

  @media (min-width: 768px) {
    grid-column: span 1 / span 1;
    justify-content: flex-start;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 8rem;
`;

const AboutBello = styled.ul`
  grid-column: span 3 / span 3;

  @media (min-width: 768px) {
    grid-column: span 2 / span 2;
  }
`;

const AboutBelloContent = styled.li`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    flex-grow: 1;
    margin-left: auto;
  }
`;

const AboutBelloTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1rem;

  margin-top: 2.2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const AboutBelloInfo = styled.div`
  margin-top: 0.75rem;
  font-size: 0.75rem;
`;

const AboutBelloBusiness = styled.p`
  margin-bottom: 0.5rem;
`;

export default function Footer(): JSX.Element {
  return (
    <FooterSection>
      <FooterWrapper>
        <TopWrapper>
          <li>
            <EmailTitle>Want more BELLO?</EmailTitle>
            <EmailInput>
              <Input type="email" placeholder="Email" />
            </EmailInput>
          </li>
          <li>
            <ServiceTitle>CUSTOMER SERVICE</ServiceTitle>
            <ServiceInfo>
              <ServiceTime>9.30am - 6.30pm</ServiceTime>
              <ServiceContent>(02) 000-0000</ServiceContent>
              <ServiceContent>bello@com</ServiceContent>
            </ServiceInfo>
          </li>
          <li>
            <ServiceTitle>FOLLOW US</ServiceTitle>
            <FollowWrapper>
              <FollowInsta>
                <FollowIcon>
                  <AiOutlineInstagram />
                </FollowIcon>
                <FollowName>Instagram</FollowName>
              </FollowInsta>
              <li style={{ marginBottom: '0.625rem' }}>
                <FollowIcon>
                  <AiFillYoutube />
                </FollowIcon>
                <FollowName>Youtube</FollowName>
              </li>
              <li style={{ marginBottom: '0.625rem' }}>
                <FollowIcon>
                  <AiFillFacebook />
                </FollowIcon>
                <FollowName>Facebook</FollowName>
              </li>
              <li style={{ marginBottom: '0.625rem' }}>
                <FollowIcon>
                  <AiOutlineTwitter />
                </FollowIcon>
                <FollowName>Twitter</FollowName>
              </li>
            </FollowWrapper>
          </li>
        </TopWrapper>

        <BottomWrapper>
          <BottomLogo>
            <LogoImage src={logo} alt="logo" />
          </BottomLogo>
          <AboutBello>
            <AboutBelloContent>
              <AboutBelloTitle>ABOUT BELLO</AboutBelloTitle>
              <AboutBelloInfo>
                <AboutBelloBusiness>
                  1234 Park Ave, New York, NY 10001, USA
                </AboutBelloBusiness>
                <AboutBelloBusiness>
                  Company Name: XYZ Corp. Business Registration No.:
                  123-45-67890 E-commerce Permit No.: 2023-NewYork-1234 Check
                  Business Information
                </AboutBelloBusiness>
                <AboutBelloBusiness>
                  Customer Service Center: +1 (800) 000-0000 (Operating hours:
                  09:00~18:00, Lunch time: 12:50~14:00) FAX : +1 (800) 000-0000
                </AboutBelloBusiness>
                <p>Copyright © 2023</p>
              </AboutBelloInfo>
            </AboutBelloContent>
          </AboutBello>
        </BottomWrapper>
      </FooterWrapper>
    </FooterSection>
  );
}

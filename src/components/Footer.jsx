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
  padding-left: 1.5rem; // px-6
  padding-right: 1.5rem;
  background-color: #f3f4f6; // bg-gray-100
  margin-top: 10rem; // mt-40
`;

const FooterWrapper = styled.div`
  max-width: 1536px; // max-w-screen-2xl
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
    grid-template-columns: repeat(2, minmax(0, 1fr)); // md:grid-cols-2
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); // lg:grid-cols-3
    padding: 2.5rem; // p-10
  }

  @media (min-width: 768px) {
  }
`;

const EmailTitle = styled.h3`
  font-size: 0.75rem; // text-xs
  font-weight: bold; // font-semibold
  line-height: 1rem; // leading-4
`;

const EmailInput = styled.div`
  margin-top: 1rem; // mt-4
`;

const Input = styled.input`
  height: 3rem; // h-12
  line-height: 1.75rem; // leading-7
  background-color: #e5e7eb; // bg-gray-200
  color: #6b7280; // text-gray-500
  border-color: transparent;
  border-radius: 0.5rem;
  padding: 1rem; // p-4
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
  margin-top: 1rem; // mt-4
  font-size: 0.75rem; // text-xs
  line-height: 1rem; // leading-4
`;

const ServiceTime = styled.p`
  margin-top: 0.75rem; // mt-3
  margin-bottom: 0.625rem; // mb-2.5
`;

const ServiceContent = styled.p`
  margin-bottom: 0.625rem; // mb-2.5
`;

const FollowWrapper = styled.ul`
  margin-top: 0.5rem; // mt-2
  font-size: 0.75rem; // text-xs
  line-height: 1rem;
`;

const FollowInsta = styled.li`
  margin-top: 0.75rem;
  margin-bottom: 0.625rem;
`;

const FollowIcon = styled.span`
  display: inline-block;
  font-size: 1.125rem; // text-lg
  vertical-align: middle; // align-middle
`;

const FollowName = styled.p`
  margin-left: 0.375rem; // ml-1.5
  display: inline-block;
`;

const BottomWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); // grid-cols-3
  padding: 2.5rem;
  column-gap: 12rem;

  @media (min-width: 768px) {
  }
`;

const BottomLogo = styled.li`
  grid-column: span 3 / span 3; // col-span-full

  @media (min-width: 768px) {
    grid-column: span 1 / span 1; // md:col-span-1
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
  grid-column: span 3 / span 3; // col-span-full

  @media (min-width: 768px) {
    grid-column: span 2 / span 2; // md:col-span-2
  }
`;

const AboutBelloContent = styled.li`
  width: 100%;

  @media (min-width: 768px) {
    width: auto; // md:w-auto
    flex-grow: 1; //md:flex-grow
    margin-left: auto; //md:ml-auto
  }
`;

const AboutBelloTitle = styled.h3`
  font-size: 0.75rem; // text-xs
  font-weight: bold; // font-semibold
  line-height: 1rem; // leading-4

  margin-top: 2.2rem;

  @media (min-width: 768px) {
    margin-top: 0; //md:m-[0]
  }
`;

const AboutBelloInfo = styled.div`
  margin-top: 0.75rem; // mt-3
  font-size: 0.75rem; // text-xs
`;

const AboutBelloBusiness = styled.p`
  margin-bottom: 0.5rem;
`;

export default function Footer() {
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

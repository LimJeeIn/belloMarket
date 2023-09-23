import React from 'react';
import logo from '../assets/image/logo.png';
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="px-6 bg-gray-100 mt-40">
      <div className="max-w-screen-2xl m-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-48 p-10 border-b border-gray-300 md:grid-none">
          <li>
            <h3 className="text-xs font-semibold leading-4">
              Want more BELLO?
            </h3>
            <div className="mt-4">
              <input
                type="email"
                className="h-12 leading-7 bg-gray-200 text-gray-500 border-transparent rounded-lg p-4 w-full"
                placeholder="Email"
              />
            </div>
          </li>
          <li>
            <h3 className="text-xs font-semibold leading-4 mt-[2.2rem] md:mt-[0]">
              CUSTOMER SERVICE
            </h3>
            <div className="mt-4 text-xs leading-4">
              <p className="mt-3 mb-2.5">9.30am - 6.30pm</p>
              <p className="mb-2.5">(02) 000-0000</p>
              <p className="mb-2.5">bello@com</p>
            </div>
          </li>
          <li>
            <h3 className="text-xs font-semibold leading-4 mt-[2.2rem] md:mt-[0]">
              FOLLOW US
            </h3>
            <ul className="mt-2 text-xs">
              <li className="mt-3 mb-2.5">
                <span className="inline-block text-lg align-middle">
                  <AiOutlineInstagram />
                </span>
                <p className="ml-1.5 inline-block">Instagram</p>
              </li>
              <li className="mb-2.5">
                <span className="inline-block text-lg align-middle">
                  <AiFillYoutube />
                </span>
                <p className="ml-1.5 inline-block">Youtube</p>
              </li>
              <li className="mb-2.5">
                <span className="inline-block text-lg align-middle">
                  <AiFillFacebook />
                </span>
                <p className="ml-1.5 inline-block">Facebook</p>
              </li>
              <li className="mb-2.5">
                <span className="inline-block text-lg align-middle">
                  <AiOutlineTwitter />
                </span>
                <p className="ml-1.5 inline-block">Twitter</p>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="grid grid-cols-3 gap-x-48 p-10 md:grid-none">
          <li className="col-span-full md:col-span-1 flex justify-center md:justify-start items-center">
            <img
              src={logo}
              alt="logo"
              className="w-full max-w-32"
              style={{ maxWidth: '8rem' }}
            />
          </li>
          <ul className="col-span-full md:col-span-2">
            <li className="w-full md:w-auto md:flex-grow md:ml-auto">
              <h3 className="text-xs font-semibold leading-4 mt-[2.2rem] md:mt-[0]">
                ABOUT BELLO
              </h3>
              <div className="mt-3 text-xs">
                <p className="mb-2">1234 Park Ave, New York, NY 10001, USA</p>
                <p className="mb-2">
                  Company Name: XYZ Corp. Business Registration No.:
                  123-45-67890 E-commerce Permit No.: 2023-NewYork-1234 Check
                  Business Information
                </p>
                <p className="mb-2">
                  Customer Service Center: +1 (800) 000-0000 (Operating hours:
                  09:00~18:00, Lunch time: 12:50~14:00) FAX : +1 (800) 000-0000
                </p>
                <p>Copyright © 2023</p>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

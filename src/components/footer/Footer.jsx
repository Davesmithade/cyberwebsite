import React from "react";
import Logo from "../../assets/logo.png";
import Facebook from '../../assets/facebookicon.svg'
import Instagram from '../../assets/instagramicon.svg'
import Twitter from '../../assets/twittericon.svg'
import Discord from '../../assets/discordicon.svg'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex footer gap-[80px] justify-end mr-[5rem]">
          <div className="w-[15%]">
            <img src={Logo} alt="" />
          </div>

          {/* Column 1 */}
          <div className="">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#link1" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#link1" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#link1" className="hover:text-blue-500">
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#link2" className="hover:text-blue-500">
                  How To Enrol
                </a>
              </li>
              <li className="mb-2">
                <a href="#link3" className="hover:text-blue-500">
                  contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="">
            <h3 className="text-lg font-bold mb-2">Discover</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#link5" className="hover:text-blue-500">
                  Trending
                </a>
              </li>
              <li className="mb-2">
                <a href="#link6" className="hover:text-blue-500">
                  New on CyberSecurity?
                </a>
              </li>
              <li className="mb-2">
                <a href="#link7" className="hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#link8" className="hover:text-blue-500">
                  Top Courses
                </a>
              </li>

              <li className="mb-2">
                <a href="#link8" className="hover:text-blue-500">
                  Help Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="">
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#link9" className="hover:text-blue-500">
                  Privacy & Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#link10" className="hover:text-blue-500">
                  Coockies Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#link11" className="hover:text-blue-500">
                  FAQ's
                </a>
              </li>
              <li className="mb-2">
                <a href="#link12" className="hover:text-blue-500">
                  Join the Community
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="">
            <h3 className="text-lg font-bold mb-2">Transparency</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#link13" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#link14" className="hover:text-blue-500">
                  Information & Security Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#link15" className="hover:text-blue-500">
                  Send a Message
                </a>
              </li>
              <li className="mb-2">
                <a href="#link16" className="hover:text-blue-500">
                  Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="socials mt-12 justify-center flex gap-5 items-center">
              <div className="facebook ">
                <img
                  src={Facebook}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] cursor-pointer p-2 rounded-full"
                />
              </div>
              <div className="facebook">
                <img
                  src={Instagram}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] cursor-pointer p-2 rounded-full"
                />
              </div>
              <div className="facebook">
                <img
                  src={Discord}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] cursor-pointer p-2 rounded-full"
                />
              </div>
              <div className="facebook">
                <img
                  src={Twitter}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] cursor-pointer p-2 rounded-full"
                />
              </div>
            </div>

        <div className="mt-4 mb-3 text-center">
            <h2>© 2023 Cyber Security Experts Association of Nigeria (CSEAN). All rights reserved.</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

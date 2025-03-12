import React, { useState } from 'react';
import Navigation from "./Navigation"; // New Navigation Component
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';
import Hello from "../assets/Hello.png";
import About from './About';


const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Navigation Component */}
 

      {/* Main Content */}
      <div className="flex-grow flex">
        {activeSection === 'home' && (
          <div className="h-full w-full flex relative">
            {/* Social Icons Section */}
            <div className="flex flex-col justify-end items-center p-4 ml-5">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope].map((Icon, index) => (
                <a key={index} href="#" className="text-white text-2xl my-2 p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition">
                  <Icon />
                </a>
              ))}
            </div>

            {/* Content Section */}
            <div className="w-1/2 flex items-center justify-center p-6 ">
              <div>
                <img src={Hello} alt="HELLO" width={200} height={100} />
                <h1 className="text-4xl font-bold mt-4">I'm <u>Anish</u></h1>
                <p className="text-lg text-gray-600 mt-4">UI/UX Designer, Front-End Developer & Thinker</p>
                <p className="text-lg text-gray-600 mt-4">Based in India</p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-1/2 flex items-center justify-center p-8 bg-gray-200 relative">
              <img 
                src="/profile-pic.png" 
                alt="Mowriyaa B K" 
                className="rounded-2xl w-60 h-60 object-cover shadow-lg border-4 border-blue-400"
              />
              {/* Vertical Email at Bottom Right */}
              <div className="absolute bottom-4 right-4 rotate-90 text-gray-700 font-bold">
                anish@example.com
              </div>
            </div>
          </div>
        )}

        {activeSection === 'about' && <About />}
      </div>
    </div>
  );
}

export default Home;

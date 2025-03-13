import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FaRegHandPaper } from 'react-icons/fa'; // Wave Icon
import Hello from "../assets/Hello.png";
import About from './About';
import profile from "../assets/Image.png";

const Home = ({ activeSection, darkMode }) => {
  return (
    <div
      className={`h-screen w-full flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
      style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}
    >
      <div className="flex-grow flex">
        {activeSection === 'home' && (
          <div className="h-full w-full flex relative">

            {/* Social Icons Section */}
            <div className="flex flex-col justify-end items-center p-4 ml-5">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-2xl my-2 p-2 rounded-full transition ${darkMode ? 'bg-white text-black hover:bg-blue-500' : 'bg-gray-700 text-white hover:bg-blue-500'
                    }`}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Welcome Section */}
            <div className="w-1/2 flex items-center justify-center p-6">
              <div>
                <img src={Hello} alt="HELLO" width={200} height={100} />
                
                {/* Name with Wave Icon */}
                <h1 className="text-4xl font-bold mt-4 flex items-center gap-2">
                  I'm <u className='text-gray-300'>Anish</u> 
                  <FaRegHandPaper className="text-yellow-400 text-4xl animate-waving-hand" />
                </h1>

                <p className={`text-lg mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  UI/UX Designer, Front-End Developer & Thinker
                </p>
                <p className={`text-lg mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based in India
                </p>

                {/* Buttons Section */}
                <div className="mt-6 flex gap-4">
                  {/* Download CV Button */}
                  <button
                    className="bg-orange-500 text-white px-6 py-3 font-semibold 
                    hover:bg-orange-600 active:scale-95 transition duration-200 shadow-md border-x-white border-8"
                  >
                    Download CV
                  </button>

                  {/* Get in Touch Button */}
                  <button
                    className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 
                    font-semibold hover:from-black hover:to-gray-800 active:scale-95 
                    transition duration-200 shadow-md border-x-white border-8"
                  >
                    Get in Touch!
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="w-1/2 flex items-center justify-center p-8 relative">
              <div
                className={`absolute inset-0 bg-[url('../assets/Hero Background.svg')] bg-center ${darkMode ? 'opacity-20' : 'opacity-30'
                  }`}
              />

              <img
                src={profile}
                alt="Anish"
                className="w-50 h-auto z-10"
              />

              {/* Email & Line */}
              <div className={`absolute bottom-1/4 right-[-30px] rotate-90 font-bold z-20 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                sinhaanishkumar@outlook.com
              </div>
              <h3 className={`absolute bottom-1 right-16 rotate-180 font-bold z-20 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                _______
              </h3>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && <About darkMode={darkMode} />}
      </div>
    </div>
  );
};

export default Home;

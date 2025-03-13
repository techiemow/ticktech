import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTelegram
} from 'react-icons/fa';
import Hello from "../assets/Hello.png";
import About from './About';
import profile from "../assets/Image.png";
import kooLogo from "../assets/Koo_Logo.png";
import wave from "../assets/wave.png"; // Imported wave image

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
              {[
                { Icon: () => <img src={kooLogo} alt="Koo" className="w-6 h-6" />, link: "https://www.kooapp.com" },
                { Icon: FaInstagram, link: "https://instagram.com" },
                { Icon: FaTwitter, link: "https://twitter.com" },
                { Icon: FaGithub, link: "https://github.com" },
                { Icon: FaLinkedin, link: "https://linkedin.com" },
                { Icon: FaFacebook, link: "https://facebook.com" },
                { Icon: FaTelegram, link: "https://telegram.org" }
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl my-2 p-2 rounded-full transition ${darkMode ? 'bg-white text-black hover:bg-blue-500' : 'bg-gray-700 text-white hover:bg-blue-500'}`}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Welcome Section */}
            <div className="w-1/2 flex items-center justify-center p-6">
              <div>
                <img src={Hello} alt="HELLO" width={200} height={100} />

                {/* Name with Wave Image */}
                <h1 className="text-4xl font-bold mt-4 flex items-center gap-2">
                  I'm <u className='text-gray-300'>Anish</u>
                  <img src={wave} alt="Wave" className="w-10 h-10 animate-waving-hand" />
                </h1>

                <p className={`text-lg mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  UI/UX Designer, Front-End Developer & Thinker
                </p>
                <p className={`text-lg mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based in India
                </p>

                {/* Buttons Section */}
                <div className="mt-6 flex gap-4">
                  <button
                    className="bg-orange-500 text-white px-6 py-3 font-semibold 
                    hover:bg-orange-600 active:scale-95 transition duration-200 shadow-md border-x-white border-8"
                  >
                    Download CV
                  </button>

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
                className={`absolute inset-0 bg-[url('../assets/Hero Background.svg')] bg-center ${darkMode ? 'opacity-20' : 'opacity-30'}`}
              />

              <img
                src={profile}
                alt="Anish"
                className="w-50 h-auto z-10"
              />

              {/* Email Text (Bottom to Top) */}
              <div
                className="absolute bottom-[80px] top-2 right-10 rotate-90 font-bold z-20"
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                  letterSpacing: "2px",
                  color: darkMode ? "white" : "black",
                  fontSize: "16px"
                }}
              >
                sinhaanishkumar@outlook.com
              </div>

              {/* Decorative Line */}
              <h3 className='absolute bottom-[-10px] right-8 rotate-180 text-gray-700 font-bold z-20'>
                <b>______</b>
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

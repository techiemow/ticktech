import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';
import Hello from "../assets/Hello.png";
import About from './About';
import profile from "../assets/Hero Image.png";

const Home = ({ activeSection, darkMode }) => {
  return (
    <div className={`h-[calc(100vh-100px)] w-full flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex-grow flex">
        {activeSection === 'home' && (
          <div className="h-full w-full flex relative">
            <div className="flex flex-col justify-end items-center p-4 ml-5">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope].map((Icon, index) => (
                <a key={index} href="#" className="text-white text-2xl my-2 p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition">
                  <Icon />
                </a>
              ))}
            </div>

            <div className="w-1/2 flex items-center justify-center p-6">
              <div>
                <img src={Hello} alt="HELLO" width={200} height={100} />
                <h1 className="text-4xl font-bold mt-4">I'm <u>Anish</u></h1>
                <p className="text-lg text-gray-600 mt-4">UI/UX Designer, Front-End Developer & Thinker</p>
                <p className="text-lg text-gray-600 mt-4">Based in India</p>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-[url('../assets/Hero Background.svg')] bg-cover bg-center opacity-30 rounded-2xl" />
              
              <img src={profile} alt="Anish" className="rounded-2xl w-60 h-60 object-cover shadow-lg border-4 z-10" />

              <div className="absolute bottom-1/4 right-3 rotate-90 text-gray-700 font-bold z-20">
                anish@example.com
              </div>
              <h3 className='absolute bottom-1 right-16 rotate-180 text-gray-700 font-bold z-20'>
                ______
              </h3>
            </div>
          </div>
        )}

        {activeSection === 'about' && <About />}
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';
import hand from "../assets/Rectangle.png";
import handbackground from "../assets/Vector 1.png";
import yellowbackground from "../assets/Vector 4.png";
import graybackground from "../assets/Vector 5.png";
import rightbackground from "../assets/Vector 3.png";

const About = ({ darkMode }) => {
  return (
    <div className={`h-screen w-full flex flex-col relative overflow-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Social Icons Section with Hand Images */}
        <div className="flex flex-col justify-end items-center p-4 ml-10 relative">

          {/* Hand Images Container */}
          <div className="absolute top-[-50px] left-[-40px] w-[300px] h-[450px] mt-8">
            {/* Hand Background (Behind the Hand) */}
            <img
              src={handbackground}
              alt="Background Hand"
              className={`absolute top-0 left-0 w-full h-full `}
            />

            {/* Hand Image (In Front) */}
            <img
              src={hand}
              alt="Hand"
              className="absolute top-0 left-0 w-full h-full z-10"
            />
          </div>
        </div>

        {/* About Content Section */}
        <div className={`flex items-center justify-center w-[950px] h-[564px] mx-auto p-6 ${darkMode ? 'bg-black' : 'bg-white'}`} style={ { fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          <div>
            {/* Title with Line in Same Row */}
            <div className="flex items-center justify-between w-full">
              <h1 className={`text-4xl font-bold gap-3`}>
                <span className='text-5xl'>T</span>his is it ;)
              </h1>
              <h1 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-2xl`}>
                ________________________________________________________________________
              </h1>
            </div>

            <p className="text-lg mt-4">
             <b>Anish Kr. Sinha </b>is an Indian <b> UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11 .
            </p>

            <p className="text-lg">
            He holds a <b>bachelor degree in Computer Applications</b>. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.
            </p>

            <p className="text-lg mt-4">
            His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <b>3D floor plans</b>.
            </p>

            <p className="text-lg mt-4">
            When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
            </p>
            <br />
            <h1 className="text-center">_______________________________________________</h1>
          </div>
        </div>

        {/* Yellow, Gray & Right Background Images */}
        <div className="absolute w-full bottom-0">
          <img
            src={yellowbackground}
            alt="Yellow Background"
            className={`absolute left-60 bottom-[-60px] w-[250px] h-[250px] `}
          />

          <img
            src={graybackground}
            alt="Gray Background"
            className={`absolute right-60 bottom-[-40px] w-[300px] h-[300px] `}
          />

          <img
            src={rightbackground}
            alt="Right Background"
            className={`absolute right-[0px] bottom-[40px] w-[300px] h-[564px] `}
          />
        </div>

        {/* Social Icons at Bottom Left */}
        <div className="absolute bottom-5 left-5 flex flex-col gap-3 z-20 mx-4">
          {[
            { Icon: FaFacebook, link: "https://facebook.com" },
            { Icon: FaTwitter, link: "https://twitter.com" },
            { Icon: FaLinkedin, link: "https://linkedin.com" },
            { Icon: FaInstagram, link: "https://instagram.com" },
            { Icon: FaGithub, link: "https://github.com" },
            { Icon: FaYoutube, link: "https://youtube.com" },
            { Icon: FaEnvelope, link: "mailto:anish@example.com" }
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl p-2 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-gray-700 text-white'} hover:bg-blue-500 transition`}
              aria-label={`Social icon ${index + 1}`}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Vertical Email at Bottom Right */}
        <div className="absolute bottom-[160px] right-3 rotate-90 font-bold z-20" style={{ 
        writingMode: 'vertical-rl', 
        textOrientation: 'upright', 
        letterSpacing: '3px' 
    }}>
          sinhaanishkumar@outlook.com
        </div>

        {/* Decorative Line */}
        <h3 className='absolute bottom-[-10px] right-24 rotate-180 text-gray-700 font-bold z-20'>
          ___________
        </h3>
      </div>
    </div>
  );
}

export default About;

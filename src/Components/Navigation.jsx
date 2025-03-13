import React from 'react';
import logo from "../assets/Logo.svg";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import logodark from "../assets/logodark.png"


const Navigation = ({ setActiveSection, darkMode, setDarkMode }) => {
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <nav className={`p-4 shadow-sm ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo Change Based on Dark Mode */}
                <div className="flex items-center space-x-3">
                    <img 
                        src={darkMode ? logodark : logo} 
                        alt="Logo" 
                        className="h-10 w-10 rounded-full"
                    />
                    <span className="text-xl font-bold">ANISH KUMAR SINHA</span>
                </div>

                <div className="hidden md:flex space-x-16">
                    <button onClick={() => setActiveSection('home')} className="cursor-pointer">Home</button>
                    <button onClick={() => setActiveSection('about')} className="cursor-pointer">About</button>
                    <a href="#resume" >Resume</a>
                    <a href="#skills" >Skills</a>
                    <a href="#projects" >Projects</a>
                    <a href="#contact" >Contact</a>
                    <button 
                        onClick={toggleDarkMode} 
                        className={`text-2xl rounded-full 
                                    ${darkMode ? 'bg-yellow-400 text-black' : ''} 
                                    hover:scale-110 transition duration-300`}
                    >
                        {darkMode ? <MdOutlineWbSunny /> : <BsMoonStarsFill />}
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="text-2xl">&#9776;</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

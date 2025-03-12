import React, { useState } from 'react';
import logo from "../assets/Logo.svg";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

const Navigation = ({ setActiveSection }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className={`p-8 shadow-sm ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Name */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
                    <span className="text-xl font-bold">ANISH KUMAR SINHA</span>
                </div>

                {/* Links & Dark Mode Toggle */}
                <div className="hidden md:flex space-x-16">
                    <button onClick={() => setActiveSection('home')} className="hover:text-blue-400 transition">Home</button>
                    <button onClick={() => setActiveSection('about')} className="hover:text-blue-400 transition">About</button>
                    <a href="#resume" className="hover:text-blue-400 transition">Resume</a>
                    <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-blue-400 transition">Contact</a>

                    <button onClick={toggleDarkMode} className="text-2xl">
                        {darkMode ? <BsMoonStarsFill /> : <MdOutlineWbSunny />}
                    </button>
                </div>

                {/* Mobile Menu (Optional) */}
                <div className="md:hidden">
                    <button className="text-2xl">&#9776;</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

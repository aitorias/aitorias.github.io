import React, { useState } from 'react';

import javascript from '../../assets/img/javascript-white.svg';
import python from '../../assets/img/python-white.svg';
import php from '../../assets/img/php-white.svg';
import sql from '../../assets/img/sql-white.svg';
import html5 from '../../assets/img/html5-white.svg';
import css3 from '../../assets/img/css3-white.svg';
import git from '../../assets/img/git-white.svg';
import tailwindcss from '../../assets/img/tailwind-white.svg';
import bootstrap from '../../assets/img/bootstrap-white.svg';
import cplusplus from '../../assets/img/cplusplus-white.svg';
import typescript from '../../assets/img/typescript-white.svg';
import react from '../../assets/img/react-white.svg';

import style from './About.module.css'

function About() {
    const [visible, setVisible] = useState(false);

    const toggleCurtain = () => {
        setVisible((prevVisible) => !prevVisible);
    };

    return (
        <section className="items-center bg-kamenozoki flex flex-col gap-0 h-screen justify-center lg:flex-row lg:gap-0 lg:justify-between" id="about-me">
            <div className="items-center flex flex-col justify-center lg:w-6/12">
                <div className="flex flex-col gap-4 justify-center py-8 px-4 lg:px-8 text-center">
                    <h2 className={`font-bold text-2xl lg:text-6xl ${style.timelineTitle}`}>About me</h2>
                    <p className={`text-md lg:text-3xl text-left first-letter:text-5xl lg:first-letter:text-9xl first-letter:font-bold first-letter:float-left first-letter:mr-4 ${style.timelineText}`}>I'm a creative front end developer and junior programmer based in Barcelona. Usually working to create astonishing and fancy projects where I can release my full potential.</p>
                    <p className={`text-md lg:text-3xl text-left ${style.timelineText}`}>These are my skills:</p>
                </div>
            </div>
            <div className="items-center flex overflow-hidden relative h-full w-full lg:w-6/12">
                <div className={`items-center bg-white cursor-pointer flex h-full justify-center px-4 absolute text-center transition-all duration-1000 w-full ${visible ? style.curtainOpen : ''}`} id="skills-curtain" onClick={toggleCurtain}>
                    <span className="text-ai text-xl block md:text-4xl">Click to open the curtain</span>
                </div>
                <div className={`items-center grid grid-cols-3 grid-rows-4 gap-4 h-full justify-between w-full`}>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-yellow-400 ${style.skills}`}>
                        <img src={javascript} alt="JavaScript" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-blue-600 ${style.skills}`}>
                        <img src={python} alt="Python" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-indigo-500 ${style.skills}`}>
                        <img src={php} alt="PHP" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-blue-600 ${style.skills}`}>
                        <img src={sql} alt="SQL" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-orange-600 ${style.skills}`}>
                        <img src={html5} alt="HTML5" className="w-4/12" />

                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-blue-700 ${style.skills}`}>
                        <img src={css3} alt="CSS3" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-red-500 ${style.skills}`}>
                        <img src={git} alt="git" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-cyan-500 ${style.skills}`}>
                        <img src={tailwindcss} alt="tailwind css" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-purple-900 ${style.skills}`}>
                        <img src={bootstrap} alt="Bootstrap" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-blue-400 ${style.skills}`}>
                        <img src={cplusplus} alt="C++" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-blue-700 ${style.skills}`}>
                        <img src={typescript} alt="typescript" className="w-4/12" />
                    </div>
                    <div className={`items-center bg-fixed bg-center bg-no-repeat bg-cover shadow-inner flex h-full justify-center transition-all duration-500 w-full hover:bg-none hover:bg-cyan-400 ${style.skills}`}>
                        <img src={react} alt="react" className="w-4/12" />
                    </div>
                </div>
            </div >
        </section >
    );
}

export default About;

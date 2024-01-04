import React from 'react';

import style from "./Hero.module.css"

function Hero() {
    return (
        <section className={`items-center bg-fixed bg-center bg-no-repeat bg-cover flex justify-center h-screen px-4 ${style.parallaxContainer}`}>
            <header className="items-center backdrop-opacity-10 backdrop-invert bg-sky-950/50 rounded-md flex flex-col gap-8 justify-center p-4 text-center">
                <h1 className={`text-white text-5xl lg:text-7xl font-bold`}>Aitorias</h1>
                <h2 className={`text-white text-4xl lg:text-6xl font-bold`}>Front-end and software developer</h2>
            </header>
        </section>
    );
}

export default Hero;

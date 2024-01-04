import React, { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ButtonMenu from './components/ButtonMenu/ButtonMenu';

import style from './App.module.css';

function App() {
    const [menuOpened, setMenuOpened] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);

    const toggleMenu = () => {
        setMenuOpened((prevOpen) => !prevOpen);
    };

    return (
        <>
            <div className={`transition-all duration-500 ${menuOpened ? style.movedLeft : ''}`}>
                <main>
                    <article className="page">
                        <Hero />
                        <About />
                        <Work />
                    </article>
                </main>
                <Footer />
            </div>
            <BackToTop />
            <ButtonMenu onClick={toggleMenu} isActive={buttonActive} setActive={setButtonActive} />
            <Header opened={menuOpened} onToggleMenu={toggleMenu} setButtonActive={setButtonActive} />
        </>
    );
}

export default App;

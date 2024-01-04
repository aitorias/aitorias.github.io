import React from 'react';

interface MenuProps {
    onLinkClick: () => void;
    setButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ onLinkClick, setButtonActive }: MenuProps) {

    return (
        <nav>
            <ul className="items-center flex flex-col gap-8 justify-center">
                <li>
                    <a href="#about-me" className="text-black text-4xl transition-all hover:underline" onClick={() => { onLinkClick(); setButtonActive(false); }}>About me</a>
                </li>
                <li>
                    <a href="#work" className="text-black text-4xl transition-all hover:underline" onClick={() => { onLinkClick(); setButtonActive(false); }}>My work</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

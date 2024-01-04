import React from 'react';

interface MenuProps {
    onLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

function Menu({ onLinkClick }: MenuProps) {

    return (
        <nav>
            <ul className="items-center flex flex-col gap-8 justify-center">
                <li>
                    <a href="#about-me" className="text-black transition-all hover:underline" onClick={onLinkClick}>About me</a>
                </li>
                <li>
                    <a href="#work" className="text-black transition-all hover:underline" onClick={onLinkClick}>My work</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

import React, { useState } from 'react';

import style from './ButtonMenu.module.css'

interface ButtonMenuProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonMenu({ onClick }: ButtonMenuProps) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event);
        setIsActive(!isActive);
    };

    return (
        <button className={`items-center bg-wasurenagusa text-black rounded-full flex flex-col gap-1 justify-center h-6 fixed right-8 top-4 w-6 z-50 ${isActive ? style.buttonActive : ''}`} onClick={handleClick}>
            <span className={`bg-white flex h-px transition-all w-3 ${style.topBar}`}></span>
            <span className={`bg-white h-px transition-all w-3 ${style.middleBar}`}></span>
            <span className={`bg-white h-px transition-all w-3 ${style.bottomBar}`}></span>
        </button >
    );
}

export default ButtonMenu;
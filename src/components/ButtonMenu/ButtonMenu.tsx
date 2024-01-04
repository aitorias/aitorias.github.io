import React, { useEffect, useState } from 'react';

import style from './ButtonMenu.module.css'

interface ButtonMenuProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isActive: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonMenu({ onClick, isActive, setActive }: ButtonMenuProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event);
        setActive(!isActive);
    };

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    return (
        <button className={`items-center bg-wasurenagusa hover:bg-sora text-black rounded-full flex flex-col gap-1 justify-center h-14 fixed right-8 top-4 transition-all w-14 z-50 ${style.pulseButton} ${isActive ? style.buttonActive : ''}`} onClick={handleClick}>
            <span className={`bg-white flex h-0.5 transition-all w-6 ${style.topBar}`}></span>
            <span className={`bg-white h-0.5 transition-all w-6 ${style.middleBar}`}></span>
            <span className={`bg-white h-0.5 transition-all w-6 ${style.bottomBar}`}></span>
        </button >
    );
}

export default ButtonMenu;
import React from 'react';

import Menu from '../Menu/Menu';

import style from './Header.module.css'

interface HeaderProps {
    opened: boolean
    onToggleMenu: () => void
}

function Header({ opened, onToggleMenu }: HeaderProps) {

    return (
        <header className={`bg-momo items-center flex h-full justify-center fixed right-0 top-0 transition-all duration-500  w-full lg:w-96 ${style.menuSidebar} ${opened ? style.menuOpened : ''}`} id="header">
            <Menu onLinkClick={onToggleMenu} />
        </header >
    );
}

export default Header;

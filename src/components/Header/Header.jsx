import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";
import DarkMode from "../DarkMode/DarkMode";
import MenuButton from "../MenuButton/MenuButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40" id="header">
      <div className="bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-slate-500">
        <div className="focus:outline-none mx-auto max-w-7xl px-4 py-5 md:py-7 relative transition-all sm:px-3 md:px-5">
          <nav className="items-center flex flex-wrap justify-between mx-auto w-full">
            <Link
              to={`/`}
              className="text-eldengold font-mantinia text-2xl uppercase dark:text-white"
            >
              aitorias
            </Link>
            <Menu />
            <div className="items-center flex justify-between space-x-7 order-2 md:order-3">
              <DarkMode />
              <MenuButton toggleId="navbar" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

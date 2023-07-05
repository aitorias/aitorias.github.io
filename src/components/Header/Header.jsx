import DarkMode from "../DarkMode/DarkMode";
import MenuButton from "../MenuButton/MenuButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40" id="header">
      <div className="bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-slate-500">
        <div className="focus:outline-none mx-auto max-w-7xl px-4 py-5 md:py-7 relative transition-all sm:px-3 md:px-5">
          <nav className="items-center flex flex-wrap justify-between mx-auto w-full">
            <a
              href="/"
              className="text-eldengold font-mantinia text-2xl uppercase dark:text-white"
            >
              aitorias
            </a>
            <div
              className="items-center hidden order-3 w-full md:flex md:order-2 md:w-fit animate-fade-in-down"
              id="navbar"
            >
              <ul className="items-center flex flex-col justify-start mt-5 space-y-7 md:flex-row md:mt-0 md:space-x-7 md:space-y-0">
                <li>
                  <a href="#about-me" className="text-black dark:text-white">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#specialties" className="text-black dark:text-white">
                    Specialties
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-black dark:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-black dark:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
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

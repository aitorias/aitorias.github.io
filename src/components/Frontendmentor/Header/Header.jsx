import { Link } from "react-router-dom";

import DarkMode from "../../DarkMode/DarkMode";

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
            <div className="items-center flex justify-between space-x-7 order-2 md:order-3">
              <DarkMode />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

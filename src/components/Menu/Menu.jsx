import { HashLink } from "react-router-hash-link";

export default function Menu() {
  return (
    <div
      className="items-center hidden order-3 w-full md:flex md:order-2 md:w-fit animate-fade-in-down"
      id="navbar"
    >
      <ul className="items-center flex flex-col justify-start mt-5 space-y-7 md:flex-row md:mt-0 md:space-x-7 md:space-y-0">
        <li>
          <HashLink to={`/#about-me`} className="text-black dark:text-white">
            About me
          </HashLink>
        </li>
        <li>
          <HashLink to={`/#specialties`} className="text-black dark:text-white">
            Specialties
          </HashLink>
        </li>
        <li>
          <HashLink to={`/#portfolio`} className="text-black dark:text-white">
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink to={`/#contact`} className="text-black dark:text-white">
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

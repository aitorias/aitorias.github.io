export default function MenuButton({ onClick, toggleId }) {
  const handleClick = () => {
    const element = document.getElementById(toggleId);
    if (element) {
      element.classList.toggle("hidden");
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      id="toggle-menu"
      aria-controls="navbar-default"
      aria-expanded="false"
      className="items-center rounded-lg text-gray-500 inline-flex text-sm ml-3 p-2 transition-all duration-75 ease-in-out hover:bg-gray-100 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700"
      data-collapse-toggle="navbar"
      onClick={handleClick}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

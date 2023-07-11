import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="items-center flex flex-col h-screen justify-center">
      <h1 className="text-eldengold text-5xl font-semibold mb-4 text-center">
        Oops! You seem to be lost.
      </h1>
      <p className="text-black dark:text-white mb-5">
        Here are some helpful links:
      </p>
      <Link to="/" className="text-eldengold underline">
        Home
      </Link>
      <Link to="/frontendmentor" className="text-eldengold underline">
        Projects
      </Link>
    </div>
  );
}

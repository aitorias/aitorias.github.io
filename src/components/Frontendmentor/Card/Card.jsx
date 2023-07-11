import { Link } from "react-router-dom";

export default function Card({ link, image, title, description }) {
  return (
    <div
      className={`rounded-2xl shadow-xl flex flex-row overflow-hidden relative dark:shadow-gray-600`}
    >
      <Link to={`/frontendmentor/${link}`}>
        <img
          src={image}
          alt={title}
          className={`block h-full object-cover transition-transform duration-300 w-full hover:scale-105`}
        />
      </Link>
      <div className="items-start flex min-w-1/2 p-4 w-1/2">
        <div className="flex flex-col gap-4 w-full">
          <h2 className={`text-eldengold text-xl`}>
            <Link to={`/frontendmentor/${link}`} className={`hover:underline`}>
              {title}
            </Link>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

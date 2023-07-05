import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import html5 from "../../assets/img/html5-white.svg";
import css3 from "../../assets/img/css3-white.svg";
import javascript from "../../assets/img/javascript-white.svg";
import php from "../../assets/img/php-white.svg";

export default function Specialties() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animar solo una vez cuando los elementos entran en la vista
    threshold: 0.1, // Define el porcentaje de visibilidad necesario para activar la animación
  });

  useEffect(() => {
    if (inView) {
      // Cuando los elementos están en la vista, puedes realizar acciones aquí
      console.log("Elementos en la vista");
    }
  }, [inView]);

  return (
    <section
      className="focus:outline-none mx-auto mt-25 py-7 w-full scroll-mt-100"
      id="specialties"
    >
      <h2 className="text-eldengold text-5xl font-semibold mb-25 text-center">
        Specialties
      </h2>
      <div
        className="bg-fixed bg-center bg-no-repeat bg-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 bg-eldenring-dlc"
        ref={ref}
      >
        <div
          className={`items-center hover:bg-htmlorange flex justify-center py-7 md:py-25 text-center ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: inView ? "0.2s" : "0s", // Ajusta el retraso aquí
          }}
        >
          <img
            src={html5}
            alt="HTML5"
            className="h-auto max-w-1/4 md:max-w-1/2 xl:max-w-1/4"
          />
        </div>
        <div
          className={`items-center hover:bg-cssblue flex justify-center py-7 md:py-25 text-center ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: inView ? "0.2s" : "0s", // Ajusta el retraso aquí
          }}
        >
          <img
            src={css3}
            alt="CSS3"
            className="h-auto max-w-1/4 md:max-w-1/2 xl:max-w-1/4"
          />
        </div>
        <div
          className={`items-center hover:bg-javascriptyellow flex justify-center py-7 md:py-25 text-center ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: inView ? "0.2s" : "0s", // Ajusta el retraso aquí
          }}
        >
          <img
            src={javascript}
            alt="JavaScript"
            className="h-auto max-w-1/4 md:max-w-1/2 xl:max-w-1/4"
          />
        </div>
        <div
          className={`items-center hover:bg-phppurple flex justify-center py-7 md:py-25 text-center ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: inView ? "0.2s" : "0s", // Ajusta el retraso aquí
          }}
        >
          <img
            src={php}
            alt="PHP"
            className="h-auto max-w-1/4 md:max-w-1/2 xl:max-w-1/4"
          />
        </div>
      </div>
    </section>
  );
}

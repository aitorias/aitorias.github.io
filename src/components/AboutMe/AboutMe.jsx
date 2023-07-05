export default function AboutMe() {
  return (
    <section
      className="focus:outline-none mx-auto max-w-7xl px-4 relative sm:px-3 md:px-5 scroll-mt-100"
      id="about-me"
    >
      <div className="bg-white border border-eldengold rounded drop-shadow-md -mt-7 px-7 py-25 dark:bg-slate-700 animate-fade-in-up">
        <article>
          <h2 className="text-eldengold text-5xl font-semibold mb-25 text-center">
            About me
          </h2>
          <p className="text-black dark:text-white mb-5">
            I am a <strong>front-end web developer</strong> and{" "}
            <strong>SEO expert</strong> from Barcelona, Spain.
          </p>
          <p className="text-black dark:text-white mb-5">
            Graduated as a{" "}
            <strong>web application development technician</strong> in 2014, I
            have worked in several companies in the IT sector designing,
            creating, maintaining and improving both websites and applications.
          </p>
          <p className="text-black dark:text-white">
            Currently I'm doing a bootcamp of fullstack development in
            JavaScript.
          </p>
        </article>
      </div>
    </section>
  );
}

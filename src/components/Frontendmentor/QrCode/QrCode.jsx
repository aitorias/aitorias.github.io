import qrImage from "../../../assets/img/image-qr-code.png";

import style from "./QrCode.module.css";

export default function QrCode() {
  return (
    <div className={style.page}>
      <main>
        <section className={style.cards}>
          <article className={style.card}>
            <div className={style.cardImage}>
              <img src={qrImage} alt="QR Code" className={style.cardImage} />
            </div>
            <div className={style.cardInfo}>
              <h2 className={style.cardTitle}>
                Improve your front-end skills by building projects
              </h2>
              <p className={style.cardText}>
                Scan de QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </article>
        </section>
      </main>

      <footer>
        <div className={style.attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/aitorias"
            target="_blank"
            rel="noreferrer"
          >
            Aitorias
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

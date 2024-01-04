import style from "./ImageCard.module.css";

interface ImageCardProps {
    mobileImage: string,
    desktopImage: string,
    alt: string
}

export default function ImageCard({ mobileImage, desktopImage, alt }: ImageCardProps) {
    return (
        <figure className={style.imageCard}>
            <picture>
                <source
                    type="image/png"
                    media="(min-width: 768px)"
                    srcSet={desktopImage}
                />
                <img
                    src={mobileImage}
                    alt={`${alt}`}
                    title={alt}
                    className={`${style.image}`}
                />
            </picture>
        </figure>
    );
}
import React from 'react';

import ImageCard from '../ImageCard/ImageCard';

import awakenbrandscreenshot from '../../assets/img/awakenbrandstore-screenshot.png'

import style from './Work.module.css'

function Work() {
    return (
        <section className="items-center bg-sakura flex flex-col gap-8 justify-center h-screen px-4 lg:px-8 w-full" id="work">
            <div className="items-center flex flex-col gap-4 justify-center text-center w-9/12">
                <h2 className={`text-4xl font-bold lg:text-6xl ${style.timelineTitle}`}>My work</h2>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4">
                <article className="bg-white shadow-xl rounded-md overflow-hidden">
                    <ImageCard
                        mobileImage={awakenbrandscreenshot}
                        desktopImage={awakenbrandscreenshot}
                        alt={`Awaken Brand`} />
                    <section className="flex flex-col gap-4 p-4">
                        <span className="text-md tracking-cardCategory">WordPress</span>
                        <h3 className="text-4xl">Awaken Brand</h3>
                        <a className="items-center bg-kamenozoki text-black text-xl rounded-md flex gap-2 py-1 px-2 w-fit" href="https://www.awakenbrnd.store" target="_blank" rel="nofollow noopener noreferrer">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </section>
                </article>
                <div className="items-center flex text-2xl justify-center p-8">
                    Soon more...
                </div>
            </div>
        </section>
    );
}

export default Work;

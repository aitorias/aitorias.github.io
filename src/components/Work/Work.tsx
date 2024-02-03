import React from 'react';

import ImageCard from '../ImageCard/ImageCard';

import awakenbrandscreenshot from '../../assets/img/awakenbrnd-aitorias.png'
import gencat from '../../assets/img/gencat-aitorias.png'
import icf from '../../assets/img/icf-aitorias.png'
import ais from '../../assets/img/ais-aitorias.png'

import style from './Work.module.css'

function Work() {
    return (
        <section className="items-center bg-sakura flex flex-col gap-8 justify-center h-screen px-4 lg:px-8 w-full" id="work">
            <div className="items-center flex flex-col gap-4 justify-center text-center w-9/12">
                <h2 className={`text-black text-4xl font-bold lg:text-6xl ${style.timelineTitle}`}>My work</h2>
            </div>
            <div className={`flex gap-10 overflow-x-auto pb-6 relative snap-x snap-mandatory w-full ${style.horizontalScrollbar}`}>
                <article className="bg-white shadow-xl rounded-md overflow-hidden shrink-0 snap-center w-full md:w-auto">
                    <ImageCard
                        mobileImage={awakenbrandscreenshot}
                        desktopImage={awakenbrandscreenshot}
                        alt={`Awaken Brand`} />
                    <section className="border-t border-gray-400 flex flex-col gap-8 p-6">
                        <span className="bg-ichigo rounded-md text-white text-xs text-md px-2 py-2 w-fit">WordPress</span>
                        <h3 className="text-black text-4xl">Awaken Brand</h3>
                        <a className="items-center bg-kamenozoki hover:bg-ai text-black hover:text-white text-xl rounded-md flex gap-2 py-1 px-2 transition-all w-fit" href="https://www.awakenbrnd.store" target="_blank" rel="nofollow noopener noreferrer">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </section>
                </article>
                <article className="bg-white shadow-xl rounded-md overflow-hidden shrink-0 snap-center w-full md:w-auto">
                    <ImageCard
                        mobileImage={gencat}
                        desktopImage={gencat}
                        alt={`Gencat`} />
                    <section className="border-t border-gray-400 flex flex-col gap-8 p-6">
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-kamenozoki rounded-md text-black text-xs text-md px-2 py-2 w-fit">Outsourcing</span>
                        </div>
                        <h3 className="text-black text-4xl">Gencat - Generalitat de Catalunya</h3>
                        <a className="items-center bg-kamenozoki hover:bg-ai text-black hover:text-white text-xl rounded-md flex gap-2 py-1 px-2 transition-all w-fit" href="https://web.gencat.cat/en/inici/index.html" target="_blank" rel="nofollow noopener noreferrer">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </section>
                </article>
                <article className="bg-white shadow-xl rounded-md overflow-hidden shrink-0 snap-center w-full md:w-auto">
                    <ImageCard
                        mobileImage={icf}
                        desktopImage={icf}
                        alt={`ICF`} />
                    <section className="border-t border-gray-400 flex flex-col gap-8 p-6">
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-momo rounded-md text-black text-xs text-md px-2 py-2 w-fit">From scratch</span>
                            <span className="bg-kamenozoki rounded-md text-black text-xs text-md px-2 py-2 w-fit">Outsourcing</span>
                        </div>
                        <h3 className="text-black text-4xl">ICF - Institut Català de Finances</h3>
                        <a className="items-center bg-kamenozoki hover:bg-ai text-black hover:text-white text-xl rounded-md flex gap-2 py-1 px-2 transition-all w-fit" href="https://www.icf.cat/en/inici/index.html" target="_blank" rel="nofollow noopener noreferrer">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </section>
                </article>
                <article className="bg-white shadow-xl rounded-md overflow-hidden shrink-0 snap-center w-full md:w-auto">
                    <ImageCard
                        mobileImage={ais}
                        desktopImage={ais}
                        alt={`AIS Group`} />
                    <section className="border-t border-gray-400 flex flex-col gap-8 p-6">
                        <span className="bg-momo rounded-md text-black text-xs text-md px-2 py-2 w-fit">WordPress</span>
                        <h3 className="text-black text-4xl">AIS Group</h3>
                        <a className="items-center bg-kamenozoki hover:bg-ai text-black hover:text-white text-xl rounded-md flex gap-2 py-1 px-2 transition-all w-fit" href="https://ais-int.com/" target="_blank" rel="nofollow noopener noreferrer">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </section>
                </article>
                <div className="items-center flex text-2xl font-bold justify-center p-8 shrink-0 snap-center w-full">
                    Soon more...
                </div>
            </div>
        </section>
    );
}

export default Work;

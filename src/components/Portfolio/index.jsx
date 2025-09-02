import React from "react";
import "./style.css";

const Portfolio = ({ isPage }) => {

    return (
        <section id="portfolio" className={isPage ? "portfolio portfolio--page" : "portfolio"}>
            <h2 className={isPage ? "portfolio__title portfolio__title--page" : "portfolio__title"}>portfolio</h2>
            <div className="portfolio__wrapper">
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">litestat</h3>
                        <p className="portfolio__item-description">I work as a frontend developer in the litestat team.</p>
                        <a target="_blank" className="portfolio__item-link" href="https://litestat.io/">link</a>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <img className="portfolio__logo-image" src="/litestatLogo.svg" alt="Logo of litestat"/>
                        </div>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">amoCRM</h3>
                        <p className="portfolio__item-description">I worked as a frontend developer in the integration
                            development team at amoCRM / Kommo.</p>
                        <a target="_blank" className="portfolio__item-link" href="https://amocrm.ru">link</a>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <img className="portfolio__logo-image" src="/amocrm-logo.svg" alt="Logo of amoCRM"/>
                        </div>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">protektVPN</h3>
                        <p className="portfolio__item-description">i created a web app - protektVPN. i used react,
                            typescript, rest api and scss modules.</p>
                        <a target="_blank" className="portfolio__item-link" href="https://my.protekt.app/">link</a>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <img className="portfolio__logo-image" src="https://protekt.app/logo.svg" alt="Logo of protektVPN"/>
                        </div>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">modernbanc - web app</h3>
                        <p className="portfolio__item-description">i created a web app - modernbanc. i used next js and
                            scss modules.</p>
                        <a target="_blank" className="portfolio__item-link" href="https://modernbanc.com/">link</a>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--modern" width="140" height="133" viewBox="0 0 140 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2005_27)">
                                    <path d="M71.0497 106.553C11.9592 2.42058 10.9368 -27.1565 140.045 37.5576" stroke="url(#paint0_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M64.2967 105.15C12.8911 8.70212 13.3094 -19.4343 133.292 36.1543" stroke="url(#paint1_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M57.522 103.746C13.8013 14.9836 15.6603 -11.712 126.517 34.7509" stroke="url(#paint2_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M50.7691 102.343C14.7332 21.2652 18.0329 -3.98982 119.764 33.3476" stroke="url(#paint3_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M44.0051 100.939C15.6542 27.5467 20.3945 3.73241 113 31.9442" stroke="url(#paint4_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M37.2411 99.538C16.5751 33.8302 22.7562 11.4566 106.236 30.5428" stroke="url(#paint5_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M30.4772 98.1347C17.4961 40.1117 25.1178 19.1788 99.4724 29.1394" stroke="url(#paint6_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M23.7132 96.7313C18.417 46.3933 27.4794 26.901 92.7085 27.7361" stroke="url(#paint7_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M16.9603 95.328C19.3489 52.6748 29.852 34.6233 85.9555 26.3327" stroke="url(#paint8_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M10.1856 93.9246C20.2591 58.9563 32.2029 42.3455 79.1808 24.9294" stroke="url(#paint9_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                </g>
                                <g clipPath="url(#clip1_2005_27)">
                                    <path d="M80.051 29.6967C139.141 133.829 138.266 159.61 9.15781 94.8961" stroke="url(#paint10_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M85.6276 28.9162C137.033 125.364 135.897 151.889 15.9144 96.3002" stroke="url(#paint11_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M92.2139 29.6971C135.935 118.46 133.533 144.166 22.6758 97.7028" stroke="url(#paint12_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M98.7 30.2559C134.736 111.333 131.18 136.444 29.4486 99.1066" stroke="url(#paint13_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M105.193 31.5137C133.544 104.906 128.804 128.721 36.1982 100.509" stroke="url(#paint14_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M111.957 32.9171C132.623 98.6249 126.442 120.998 42.9621 101.912" stroke="url(#paint15_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M118.721 34.3204C131.702 92.3433 124.081 113.276 49.7261 103.316" stroke="url(#paint16_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M125.485 35.7238C130.781 86.0618 121.719 105.554 56.4898 104.719" stroke="url(#paint17_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M132.249 37.1271C129.86 79.7803 119.357 97.8318 63.2537 106.122" stroke="url(#paint18_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                    <path d="M139.002 38.5285C128.928 73.4968 116.985 90.1076 70.0067 107.524" stroke="url(#paint19_linear_2005_27)" strokeWidth="1.33971" strokeLinecap="round"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_2005_27" x1="51.9535" y1="58.7194" x2="92.9882" y2="17.6848" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2005_27" x1="48.3517" y1="60.4673" x2="89.3864" y2="19.4326" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2005_27" x1="44.7282" y1="62.2151" x2="85.7629" y2="21.1804" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2005_27" x1="41.1264" y1="63.9629" x2="82.1611" y2="22.9283" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#DEDEDE"/>
                                        <stop offset="1" stopColor="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2005_27" x1="37.5137" y1="65.7108" x2="78.5484" y2="24.6761" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2005_27" x1="33.9009" y1="67.4606" x2="74.9356" y2="26.4259" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2005_27" x1="30.2882" y1="69.2084" x2="71.3229" y2="28.1737" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_2005_27" x1="26.6754" y1="70.9563" x2="67.7101" y2="29.9216" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_2005_27" x1="23.0736" y1="72.7041" x2="64.1083" y2="31.6694" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_2005_27" x1="19.4501" y1="74.4519" x2="60.4848" y2="33.4173" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_2005_27" x1="97.2493" y1="73.7342" x2="56.2146" y2="114.769" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_2005_27" x1="100.855" y1="71.9872" x2="59.8199" y2="113.022" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint12_linear_2005_27" x1="104.465" y1="70.2387" x2="63.4302" y2="111.273" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint13_linear_2005_27" x1="108.086" y1="68.4912" x2="67.0518" y2="109.526" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint14_linear_2005_27" x1="111.685" y1="66.7423" x2="70.6501" y2="107.777" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint15_linear_2005_27" x1="115.298" y1="64.9945" x2="74.2629" y2="106.029" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint16_linear_2005_27" x1="118.91" y1="63.2467" x2="77.8756" y2="104.281" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint17_linear_2005_27" x1="122.523" y1="61.4988" x2="81.4881" y2="102.534" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint18_linear_2005_27" x1="126.136" y1="59.751" x2="85.1009" y2="100.786" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <linearGradient id="paint19_linear_2005_27" x1="129.737" y1="58.0012" x2="88.7027" y2="99.0359" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE"/>
                                        <stop offset="1" stop-color="#BABABA"/>
                                    </linearGradient>
                                    <clipPath id="clip0_2005_27">
                                        <rect width="140" height="106.507" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_2005_27">
                                        <rect width="130.845" height="105.614" fill="white" transform="matrix(-1 0 0 -1 140 132.408)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">calendar storm</h3>
                        <p className="portfolio__item-description">i created a react app - calendarStorm. it helps you
                            create really flexible calendars and plan your deals. you can create some timetables and
                            share with someone, for example! i also created telegram bots (nodejs, telegraf) for
                            surveys, participated in the preparation of hypotheses. created by the team.</p>
                        <a target="_blank" className="portfolio__item-link" href="https://calendar-storm.vercel.app/">link</a>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--calendar" width="155" height="171" viewBox="0 0 155 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="15.0703" width="155" height="155" rx="38.0324" fill="#EDF5FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M38.0324 15.0684C17.0277 15.0684 0 32.0961 0 53.1008C0 53.101 8.17727e-09 53.1013 8.17727e-09 53.1016H155C155 53.1013 155 53.101 155 53.1008C155 32.0961 137.972 15.0684 116.968 15.0684H38.0324Z" fill="#E56353"/>
                                <path d="M33.5475 143.102C33.5475 139.932 34.0259 137.122 34.9827 134.67C35.9993 132.218 37.3448 129.976 39.0192 127.942C40.6936 125.849 42.5773 123.846 44.6702 121.933C46.823 119.959 49.0057 117.896 51.2183 115.743C55.1052 112.036 57.9158 108.597 59.65 105.428C61.3842 102.259 62.2513 99.2088 62.2513 96.2786C62.2513 94.0063 61.9224 91.8236 61.2646 89.7306C60.6666 87.5778 59.5603 85.8138 57.9457 84.4384C56.3311 83.063 54.0886 82.3753 51.2183 82.3753C48.7665 82.3753 46.5838 83.0032 44.6702 84.259C42.7566 85.455 41.471 86.9499 40.8132 88.7439C41.4112 89.3419 41.8298 89.9997 42.069 90.7173C42.3082 91.3751 42.4278 92.0329 42.4278 92.6907C42.4278 93.2289 42.2783 93.8269 41.9793 94.4847C41.7401 95.1425 41.2916 95.7106 40.6338 96.1889C39.976 96.6673 39.1089 96.9065 38.0325 96.9065C36.7169 96.8467 35.7003 96.3384 34.9827 95.3817C34.2651 94.4249 33.9063 93.2887 33.9063 91.9731C33.9063 90.7173 34.295 89.3419 35.0724 87.8469C35.8498 86.2921 37.0159 84.857 38.5707 83.5414C40.1853 82.166 42.1587 81.0597 44.4908 80.2225C46.823 79.3255 49.5439 78.877 52.6534 78.877C55.0454 78.877 57.3477 79.176 59.5603 79.774C61.8327 80.3122 63.8658 81.2092 65.6598 82.465C67.4538 83.7208 68.8591 85.3952 69.8757 87.4881C70.9521 89.5213 71.4903 92.0628 71.4903 95.1126C71.4903 96.6075 71.1614 98.2221 70.5036 99.9563C69.9056 101.69 68.889 103.574 67.4538 105.607C66.0784 107.581 64.2844 109.704 62.0719 111.976C59.8593 114.189 57.1384 116.61 53.9092 119.242C49.8429 122.59 46.4941 125.76 43.8629 128.75C41.2916 131.68 39.7966 134.191 39.378 136.284L55.2547 136.733C58.1849 136.793 60.7563 136.793 62.9688 136.733C65.2412 136.673 67.0053 136.225 68.2611 135.387C69.5767 134.49 70.2345 132.876 70.2345 130.544H72.9254L72.3872 143.102H33.5475ZM99.1589 144.537C94.8534 144.537 91.2953 143.909 88.4847 142.653C85.6742 141.337 83.5812 139.723 82.2058 137.809C80.8902 135.896 80.2324 134.072 80.2324 132.338C80.2324 130.962 80.5912 129.826 81.3088 128.929C82.0264 127.972 83.043 127.464 84.3586 127.404C85.435 127.344 86.2721 127.554 86.8701 128.032C87.5279 128.451 87.9764 128.989 88.2156 129.647C88.4548 130.304 88.5744 130.902 88.5744 131.441C88.5744 132.039 88.4847 132.637 88.3053 133.235C88.1259 133.833 87.8867 134.431 87.5877 135.029C88.1857 137.062 89.5312 138.527 91.6242 139.424C93.777 140.321 96.0792 140.769 98.531 140.769C102.777 140.769 106.155 139.603 108.667 137.271C111.238 134.939 112.524 131.56 112.524 127.135C112.524 124.504 112.105 122.022 111.268 119.69C110.431 117.298 108.876 115.355 106.604 113.86C104.332 112.365 101.013 111.677 96.6473 111.797C96.1689 111.797 95.6606 111.826 95.1225 111.886C94.5843 111.886 93.9863 111.916 93.3285 111.976V107.94C93.9863 107.94 94.6142 107.94 95.2122 107.94C95.8101 107.94 96.4081 107.94 97.0061 107.94C100.176 107.94 102.657 107.222 104.451 105.787C106.245 104.352 107.531 102.647 108.308 100.674C109.086 98.7005 109.474 96.8766 109.474 95.2023C109.474 92.7505 109.145 90.5678 108.488 88.6542C107.89 86.6808 106.813 85.156 105.258 84.0796C103.704 82.9434 101.551 82.3753 98.8001 82.3753C96.1091 82.3753 93.8069 83.0929 91.8933 84.5281C89.9797 85.9034 88.7837 87.3386 88.3053 88.8336C88.8435 89.4316 89.2023 90.0296 89.3817 90.6276C89.6209 91.2256 89.7405 91.8535 89.7405 92.5113C89.7405 92.9897 89.591 93.5578 89.292 94.2156C89.0528 94.8136 88.6342 95.3219 88.0362 95.7405C87.4382 96.159 86.6309 96.3683 85.6144 96.3683C84.3586 96.3683 83.4018 95.9198 82.744 95.0229C82.0862 94.1259 81.7573 93.0495 81.7573 91.7937C81.7573 90.1193 82.4151 88.2954 83.7307 86.322C85.0463 84.2889 87.0495 82.5547 89.7405 81.1195C92.4913 79.6245 95.9297 78.877 100.056 78.877C103.285 78.877 106.275 79.3853 109.026 80.4019C111.777 81.4185 113.989 83.0929 115.664 85.4251C117.338 87.6974 118.175 90.7173 118.175 94.4847C118.175 96.3384 117.697 98.2221 116.74 100.136C115.843 101.989 114.318 103.724 112.165 105.338C110.072 106.953 107.172 108.328 103.464 109.464C109.145 110.062 113.6 111.886 116.83 114.936C120.119 117.986 121.763 121.843 121.763 126.507C121.763 130.574 120.687 133.952 118.534 136.643C116.441 139.274 113.66 141.248 110.192 142.563C106.783 143.879 103.106 144.537 99.1589 144.537Z" fill="#596C76"/>
                                <rect x="28.7036" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241"/>
                                <rect x="57.4075" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241"/>
                                <rect x="85.3936" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241"/>
                                <rect x="114.097" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241"/>
                                <rect x="31.574" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D"/>
                                <rect x="60.2778" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D"/>
                                <rect x="88.2639" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D"/>
                                <rect x="116.968" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D"/>
                            </svg>
                            <svg className="portfolio__item-icon portfolio__item-icon--storm" width="68" height="197" viewBox="0 0 68 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.995211 70.2394L28.7683 1.25308C29.0731 0.495951 29.8074 0 30.6235 0H64.0409C65.4882 0 66.4563 1.48957 65.8686 2.81213L43.4045 53.3672C42.8385 54.641 43.7164 56.0886 45.1075 56.1755L65.9698 57.4784C67.4037 57.568 68.2782 59.095 67.63 60.377L40.4425 114.143C39.8015 115.411 40.6495 116.924 42.0654 117.039L61.7695 118.64C63.2072 118.756 64.0523 120.311 63.3687 121.581L23.7332 195.233C22.6096 197.321 19.4308 196.064 20.0389 193.772L34.3066 139.997C34.6256 138.795 33.7813 137.596 32.5418 137.491L7.9285 135.413C6.5868 135.3 5.73813 133.92 6.24228 132.671L28.2739 78.1103C28.7732 76.8736 27.9453 75.5039 26.6182 75.3713L2.65164 72.9764C1.32546 72.8438 0.49747 71.4757 0.995211 70.2394Z" fill="#F7AC16"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">blbaudio - slowed/speedup maker</h3>
                        <p className="portfolio__item-description">i created a react app - blbaudio. it helps you create
                            slowed/speedup remix for your track! i used next js, scss modules and howler js.</p>
                        <a target="_blank" className="portfolio__item-link" href="https://blbaudio.vercel.app/">link</a>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--blb" width="206" height="197" viewBox="0 0 206 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.48083 123.462L8.48083 56.345H22.4056L22.4056 34.3439H38.5582V20.9762H53.3184V11.7859H61.1163V0.646118L141.88 0.646118V8.44396L153.298 8.44396V17.9128H171.678V25.1536H180.869V31.8375L189.224 31.8375V41.0278H197.578V64.9783L205.376 64.9783V110.094L197.578 110.094L197.578 129.311H190.616V156.046H178.084V164.958H171.678V171.085H159.146V183.895H150.234V196.985L61.1163 196.985V183.895H53.3184V174.427H45.7991V164.958H31.8744V156.046H22.4056L22.4056 142.121H16.2787V123.462H8.48083Z" fill="#4D86F4"/>
                                <path d="M85.0662 173.035V129.311H86.0261V137.507H111.523V110.095H143.707V59.3743L190.616 59.3743V129.311H124.117L124.117 173.035H85.0662Z" fill="#242C74"/>
                                <path d="M182.818 102.296V94.4983H190.616V102.296H182.818Z" fill="#3F3CE1"/>
                                <path d="M115.979 173.034V165.236H125.448V173.034H115.979Z" fill="#4D86F4"/>
                                <path d="M115.979 165.794V157.996H125.448V165.794H115.979Z" fill="#4D86F4"/>
                                <path d="M142.715 131.818V121.235H150.513V131.818H142.715Z" fill="#4D86F4"/>
                                <path d="M171.678 131.817V107.867H179.476V131.817H171.678Z" fill="#4D86F4"/>
                                <path d="M143.272 189.188V181.39H151.069V189.188H143.272Z" fill="#3F3CE1"/>
                                <path d="M135.474 189.188V181.39H143.272V189.188H135.474Z" fill="#3F3CE1"/>
                                <path d="M127.676 189.188V181.39H135.474V189.188H127.676Z" fill="#3F3CE1"/>
                                <path d="M119.879 189.188V181.39H127.676V189.188H119.879Z" fill="#3F3CE1"/>
                                <path d="M112.08 189.188V181.39H119.878V189.188H112.08Z" fill="#3F3CE1"/>
                                <path d="M112.08 196.986V189.188H119.878V196.986H112.08Z" fill="#3F3CE1"/>
                                <path d="M119.879 196.986V189.188H127.676V196.986H119.879Z" fill="#0F1B85"/>
                                <path d="M127.676 196.986V189.188H135.474V196.986H127.676Z" fill="#0F1B85"/>
                                <path d="M135.474 196.986V189.188H143.272V196.986H135.474Z" fill="#0F1B85"/>
                                <path d="M143.272 196.986V189.188H151.069V196.986H143.272Z" fill="#0F1B85"/>
                                <path d="M104.282 196.986V189.188H112.08V196.986H104.282Z" fill="#3F3CE1"/>
                                <path d="M96.4847 196.986V189.188H104.283V196.986H96.4847Z" fill="#3F3CE1"/>
                                <path d="M88.6865 196.986V189.188H96.4844V196.986H88.6865Z" fill="#3F3CE1"/>
                                <path d="M71.9773 196.986V189.188H88.687V196.986H71.9773Z" fill="#3F3CE1"/>
                                <path d="M104.282 189.188V181.39H112.08V189.188H104.282Z" fill="#3F3CE1"/>
                                <path d="M96.4847 189.188V181.39H104.283V189.188H96.4847Z" fill="#3F3CE1"/>
                                <path d="M88.6865 189.188V181.39H96.4844V189.188H88.6865Z" fill="#3F3CE1"/>
                                <path d="M80.8893 189.188V181.39H88.6871V189.188H80.8893Z" fill="#3F3CE1"/>
                                <path d="M73.0909 189.188V181.39H80.8888V189.188H73.0909Z" fill="#3F3CE1"/>
                                <path d="M60.8373 196.985V181.39H73.091V196.985H60.8373Z" fill="#3F3CE1"/>
                                <path d="M45.7988 175.261V165.792H53.5967V175.261H45.7988Z" fill="#3F3CE1"/>
                                <path d="M22.4052 157.996V150.198H41.8998V157.996H22.4052Z" fill="#3F3CE1"/>
                                <path d="M12.3794 142.4V134.602H26.3041V142.4H12.3794Z" fill="#3F3CE1"/>
                                <path d="M65.293 181.39V173.592H73.0908V181.39H65.293Z" fill="#3F3CE1"/>
                                <path d="M45.799 165.794V157.996H53.5968V165.794H45.799Z" fill="#3F3CE1"/>
                                <path d="M34.1021 150.198V142.4H41.8999V150.198H34.1021Z" fill="#3F3CE1"/>
                                <path d="M151.069 175.263V167.465H172.235V175.263H151.069Z" fill="#3F3CE1"/>
                                <path d="M158.868 167.465V159.667H178.919V167.465H158.868Z" fill="#3F3CE1"/>
                                <path d="M166.665 159.667V151.869H183.932V159.667H166.665Z" fill="#3F3CE1"/>
                                <path d="M18.5065 134.602V126.804H26.3043V134.602H18.5065Z" fill="#3F3CE1"/>
                                <path d="M52.4824 184.732V173.592H65.2932V184.732H52.4824Z" fill="#3F3CE1"/>
                                <path d="M31.3171 165.794V157.996H45.7988V165.794H31.3171Z" fill="#3F3CE1"/>
                                <path d="M17.3921 150.198V142.4H34.1017V150.198H17.3921Z" fill="#3F3CE1"/>
                                <path d="M8.48083 134.602L8.48083 123.463H18.5066V134.602H8.48083Z" fill="#3F3CE1"/>
                                <path d="M134.917 54.9534V47.1555H158.867V54.9534H134.917Z" fill="#3F3CE1"/>
                                <path d="M164.437 175.263V167.465H172.235V175.263H164.437Z" fill="#0F1B85"/>
                                <path d="M103.725 102.296V94.4982H111.523V102.296H103.725Z" fill="#0F1B85"/>
                                <path d="M95.9279 94.4995V86.7017H103.726V94.4995H95.9279Z" fill="#0F1B85"/>
                                <path d="M72.5342 149.641V141.844H80.332V149.641H72.5342Z" fill="#0F1B85"/>
                                <path d="M111.523 31.5594V23.7616H119.321V31.5594H111.523Z" fill="#0F1B85"/>
                                <path d="M80.332 173.034V165.236H88.1299V173.034H80.332Z" fill="#0F1B85"/>
                                <path d="M119.321 54.9534V47.1555H127.119V54.9534H119.321Z" fill="#0F1B85"/>
                                <path d="M80.332 141.843V134.046H88.1299V141.843H80.332Z" fill="#0F1B85"/>
                                <path d="M119.321 23.7617V15.9639H127.119V23.7617H119.321Z" fill="#0F1B85"/>
                                <path d="M88.13 141.843V134.046H95.9278V141.843H88.13Z" fill="#0F1B85"/>
                                <path d="M127.119 23.7617V15.9639H134.917V23.7617H127.119Z" fill="#0F1B85"/>
                                <path d="M64.7366 141.844V134.046H72.5344V141.844H64.7366Z" fill="#0F1B85"/>
                                <path d="M103.726 23.7616V15.9637H111.523V23.7616H103.726Z" fill="#0F1B85"/>
                                <path d="M72.5342 165.237V157.439H80.332V165.237H72.5342Z" fill="#0F1B85"/>
                                <path d="M111.523 47.1554V39.3575H119.321V47.1554H111.523Z" fill="#0F1B85"/>
                                <path d="M71.9773 62.7511V39.3575L112.08 39.3575V62.7511H71.9773Z" fill="#3F3CE1"/>
                                <path d="M158.868 93.9416V86.1438H166.665V93.9416H158.868Z" fill="#3F3CE1"/>
                                <path d="M166.665 86.1437V78.3458H174.463V86.1437H166.665Z" fill="#3F3CE1"/>
                                <path d="M88.13 134.044V126.246H95.9278V134.044H88.13Z" fill="#153177"/>
                                <path d="M72.5341 126.248V118.45H80.3319V126.248H72.5341Z" fill="#153177"/>
                                <path d="M127.119 15.9637V8.16589H134.917V15.9637H127.119Z" fill="#153177"/>
                                <path d="M95.928 157.439V149.084H103.726V157.439H95.928Z" fill="#153177"/>
                                <path d="M80.332 149.641V141.844H88.1299V149.641H80.332Z" fill="#3F3CE1"/>
                                <path d="M119.321 31.5596V23.7617H127.119V31.5596H119.321Z" fill="#3F3CE1"/>
                                <path d="M88.13 173.034V165.236H95.9278V173.034H88.13Z" fill="#3F3CE1"/>
                                <path d="M127.119 54.9532V47.1554H134.917V54.9532H127.119Z" fill="#3F3CE1"/>
                                <path d="M72.5342 141.843V134.046H80.332V141.843H72.5342Z" fill="#3F3CE1"/>
                                <path d="M111.523 23.7616V15.9637H119.321V23.7616H111.523Z" fill="#3F3CE1"/>
                                <path d="M80.332 165.237V157.439H88.1299V165.237H80.332Z" fill="#3F3CE1"/>
                                <path d="M119.321 47.1554V39.3575H127.119V47.1554H119.321Z" fill="#3F3CE1"/>
                                <path d="M103.725 141.843V134.046H111.523V141.843H103.725Z" fill="#3F3CE1"/>
                                <path d="M88.13 126.248V118.45H95.9278V126.248H88.13Z" fill="#3F3CE1"/>
                                <path d="M127.119 8.16576V0.36792L134.917 0.36792V8.16576H127.119Z" fill="#3F3CE1"/>
                                <path d="M80.332 126.248V118.45H88.1299V126.248H80.332Z" fill="#6776FF"/>
                                <path d="M88.13 149.641V141.844H95.9278V149.641H88.13Z" fill="#6776FF"/>
                                <path d="M127.119 31.5596V23.7617H134.917V31.5596H127.119Z" fill="#6776FF"/>
                                <path d="M72.5342 134.044V126.246H80.332V134.044H72.5342Z" fill="#6776FF"/>
                                <path d="M64.1793 110.652V102.854H72.5342V110.652H64.1793Z" fill="#6776FF"/>
                                <path d="M111.523 15.9636V8.16577H119.321V15.9636H111.523Z" fill="#6776FF"/>
                                <path d="M80.332 157.439V149.642H88.1299V157.439H80.332Z" fill="#6776FF"/>
                                <path d="M119.321 39.3574V31.5596H127.119V39.3574H119.321Z" fill="#6776FF"/>
                                <path d="M80.332 134.044V126.246H88.1299V134.044H80.332Z" fill="#3F3CE1"/>
                                <path d="M64.1793 118.45V110.652H72.5342V118.45H64.1793Z" fill="#3F3CE1"/>
                                <path d="M119.321 15.9636V8.16577H127.119V15.9636H119.321Z" fill="#3F3CE1"/>
                                <path d="M88.13 157.439V149.642H95.9278V157.439H88.13Z" fill="#3F3CE1"/>
                                <path d="M127.119 39.3575V31.5597H134.917V39.3575H127.119Z" fill="#3F3CE1"/>
                                <path d="M77.5471 110.095V102.297H85.345V110.095H77.5471Z" fill="#3F3CE1"/>
                                <path d="M85.3444 110.095V102.297H93.1422V110.095H85.3444Z" fill="#3F3CE1"/>
                                <path d="M85.3444 102.296V94.4983H93.1422V102.296H85.3444Z" fill="#3F3CE1"/>
                                <path d="M64.1793 102.853V94.4982H77.547V102.853H64.1793Z" fill="#3F3CE1"/>
                                <path d="M77.5471 102.854V95.056H85.345V102.854H77.5471Z" fill="#3F3CE1"/>
                                <path d="M77.5471 95.056V87.2582H85.345V95.056H77.5471Z" fill="#3F3CE1"/>
                                <path d="M103.726 126.248V110.095H111.523V126.248H103.726Z" fill="#3F3CE1"/>
                                <path d="M8.48083 123.462L8.48083 67.2062H16.2787L16.2787 123.462H8.48083Z" fill="#3F3CE1"/>
                                <path d="M16.2781 114.551L16.2781 58.2952H24.0759L24.0759 114.551H16.2781Z" fill="#3F3CE1"/>
                                <path d="M24.0764 114.551L24.0764 58.2952H31.8743L31.8743 114.551H24.0764Z" fill="#3F3CE1"/>
                                <path d="M31.8739 114.551L31.8739 58.2952H39.6717L39.6717 114.551H31.8739Z" fill="#3F3CE1"/>
                                <path d="M39.6719 102.297L39.6719 58.2952H47.4697L47.4697 102.297H39.6719Z" fill="#3F3CE1"/>
                                <path d="M55.2671 130.146L55.2671 86.1438H64.1789V130.146H55.2671Z" fill="#3F3CE1"/>
                                <path d="M47.4697 102.296V70.5479H55.2676V102.296H47.4697Z" fill="#3F3CE1"/>
                                <path d="M175.02 47.1554V39.3575H182.818V47.1554H175.02Z" fill="#3F3CE1"/>
                                <path d="M79.7749 78.3457V70.5479H87.5727V78.3457H79.7749Z" fill="#3F3CE1"/>
                                <path d="M71.9773 78.3457V70.5479H79.7751V78.3457H71.9773Z" fill="#3F3CE1"/>
                                <path d="M134.917 78.9037V71.1058H151.07V78.9037H134.917Z" fill="#3F3CE1"/>
                                <path d="M134.36 39.3574V31.5596H143.272V39.3574H134.36Z" fill="#3F3CE1"/>
                                <path d="M64.1793 62.7512V54.9534H71.9772V62.7512H64.1793Z" fill="#3F3CE1"/>
                                <path d="M127.119 47.1554V39.3575H151.07V47.1554H127.119Z" fill="#3F3CE1"/>
                                <path d="M79.7749 39.3575V31.5597L103.725 31.5597V39.3575H79.7749Z" fill="#3F3CE1"/>
                                <path d="M40.2288 47.1554V39.3575H64.1793V47.1554H40.2288Z" fill="#3F3CE1"/>
                                <path d="M15.7216 38.243V30.4452L39.6721 30.4452V38.243H15.7216Z" fill="#3F3CE1"/>
                                <path d="M34.1021 30.4452V22.6473L58.0526 22.6473V30.4452L34.1021 30.4452Z" fill="#3F3CE1"/>
                                <path d="M35.7729 22.6472V14.8494L76.4331 14.8494V22.6472L35.7729 22.6472Z" fill="#3F3CE1"/>
                                <path d="M50.8115 14.8496V0.36792L94.8136 0.36792V14.8496L50.8115 14.8496Z" fill="#3F3CE1"/>
                                <path d="M47.4698 70.5478V62.75L103.726 62.75V70.5478H47.4698Z" fill="#3F3CE1"/>
                                <path d="M158.867 86.1444V71.1057H166.665V86.1444H158.867Z" fill="#3F3CE1"/>
                                <path d="M95.9279 149.083V126.246H103.726V149.083H95.9279Z" fill="#3F3CE1"/>
                                <path d="M111.523 141.843V119.006H119.321V141.843H111.523Z" fill="#3F3CE1"/>
                                <path d="M190.616 94.4996V54.9534H198.414V94.4996H190.616Z" fill="#3F3CE1"/>
                                <path d="M134.917 71.106V54.9534L190.616 54.9534V71.106H134.917Z" fill="#3F3CE1"/>
                                <path d="M35.7729 22.6472V14.8494H43.5708V22.6472H35.7729Z" fill="#0F1B85"/>
                                <path d="M87.0156 8.16576V0.36792L94.8135 0.36792V8.16576H87.0156Z" fill="#0F1B85"/>
                                <path d="M68.6351 22.6472V14.8494H76.433V22.6472H68.6351Z" fill="#1E1C87"/>
                                <path d="M60.8373 22.6472V14.8494H68.6351V22.6472H60.8373Z" fill="#8AABFF"/>
                                <path d="M15.7216 50.4968L15.7216 30.4452H23.5194L23.5194 50.4968H15.7216Z" fill="#0F1B85"/>
                                <path d="M190.616 87.8146V80.0167H198.414V87.8146H190.616Z" fill="#0F1B85"/>
                                <path d="M190.616 80.0179V72.2201H198.414V80.0179H190.616Z" fill="#0F1B85"/>
                                <path d="M190.616 72.2201V64.4222H198.414V72.2201H190.616Z" fill="#0F1B85"/>
                                <path d="M134.917 71.1057V63.3079H160.538V71.1057H134.917Z" fill="#0F1B85"/>
                                <path d="M134.917 63.3077V55.5099H143.272V63.3077H134.917Z" fill="#0F1B85"/>
                                <path d="M134.917 55.5099V47.712H143.272V55.5099H134.917Z" fill="#0F1B85"/>
                                <path d="M134.917 47.7124V39.3575H143.272V47.7124H134.917Z" fill="#0F1B85"/>
                                <path d="M77.5471 48.2684V40.4706H85.9019V48.2684H77.5471Z" fill="#0F1B85"/>
                                <path d="M85.9022 56.0663V48.2684H94.2571V56.0663H85.9022Z" fill="#0F1B85"/>
                                <path d="M77.5471 55.5099V47.712H85.9019V55.5099H77.5471Z" fill="#0F1B85"/>
                                <path d="M8.48083 58.295V50.4972H34.1023V58.295H8.48083Z" fill="#0F1B85"/>
                                <path d="M50.8115 8.16576V0.36792L76.433 0.36792V8.16576L50.8115 8.16576Z" fill="#0F1B85"/>
                                <path d="M8.48083 102.297L8.48083 50.4972H16.2787L16.2787 102.297H8.48083Z" fill="#0F1B85"/>
                                <path d="M8.48083 102.296L8.48083 75.004H16.8357L16.8357 102.296H8.48083Z" fill="#3F3CE1"/>
                                <path d="M0.682617 106.195L0.682617 75.004H8.48046L8.48046 106.195H0.682617Z" fill="#0F1B85"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">demuzo</h3>
                        <p className="portfolio__item-description">i took part in the development of the landing page
                            and pwa-application.</p>
                        {/* <a target="_blank" className="portfolio__item-link" href="https://demuzo.com/">link</a> */}
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--demuzo" width="426" height="243" viewBox="0 0 426 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.8593 242.749C21.4939 242.749 17.6835 241.898 14.4279 240.196C11.2464 238.42 8.58277 236.089 6.43708 233.204C4.29138 230.244 2.66362 226.952 1.55378 223.326C0.517926 219.701 0 216.001 0 212.228C0 208.454 0.517926 204.755 1.55378 201.129C2.66362 197.504 4.29138 194.248 6.43708 191.363C8.58277 188.403 11.2464 186.073 14.4279 184.371C17.6835 182.595 21.4939 181.707 25.8593 181.707C29.6327 181.707 32.7403 182.336 35.182 183.594C37.6236 184.778 39.4733 186.073 40.7312 187.478C42.063 188.884 42.8769 189.846 43.1728 190.364H44.0607V157.291H60.9303V241.639H44.0607V234.092H43.1728C42.8769 234.61 42.063 235.572 40.7312 236.977C39.4733 238.383 37.6236 239.715 35.182 240.973C32.7403 242.157 29.6327 242.749 25.8593 242.749ZM30.7426 229.097C33.7762 229.097 36.2918 228.284 38.2895 226.656C40.3612 224.954 41.878 222.808 42.8399 220.219C43.8757 217.629 44.3936 214.965 44.3936 212.228C44.3936 209.49 43.8757 206.827 42.8399 204.237C41.878 201.647 40.3612 199.539 38.2895 197.911C36.2918 196.209 33.7762 195.358 30.7426 195.358C27.709 195.358 25.1564 196.209 23.0847 197.911C21.087 199.539 19.5702 201.647 18.5343 204.237C17.5725 206.827 17.0915 209.49 17.0915 212.228C17.0915 214.965 17.5725 217.629 18.5343 220.219C19.5702 222.808 21.087 224.954 23.0847 226.656C25.1564 228.284 27.709 229.097 30.7426 229.097Z" fill="#2D2D2D"/>
                                <path d="M103.56 242.749C98.381 242.749 93.9047 241.898 90.1312 240.196C86.3577 238.42 83.2502 236.089 80.8085 233.204C78.3669 230.244 76.5172 226.952 75.2593 223.326C74.0755 219.701 73.4836 215.964 73.4836 212.117C73.4836 208.417 74.0385 204.792 75.1484 201.24C76.3322 197.615 78.1079 194.322 80.4756 191.363C82.9172 188.403 85.9878 186.073 89.6873 184.371C93.4607 182.595 97.9001 181.707 103.005 181.707C108.407 181.707 113.179 182.891 117.322 185.259C121.54 187.626 124.832 191.141 127.2 195.802C129.568 200.39 130.751 205.976 130.751 212.561V216.667H90.4642C90.6861 220.219 91.907 223.289 94.1266 225.879C96.4203 228.469 99.5649 229.763 103.56 229.763C105.854 229.763 107.704 229.43 109.109 228.765C110.589 228.025 111.736 227.211 112.55 226.323C113.364 225.361 113.919 224.51 114.215 223.77C114.511 223.03 114.659 222.66 114.659 222.66H130.196C130.196 222.66 130.011 223.363 129.642 224.769C129.346 226.101 128.68 227.766 127.644 229.763C126.608 231.761 125.091 233.759 123.093 235.757C121.17 237.754 118.617 239.419 115.436 240.751C112.254 242.083 108.296 242.749 103.56 242.749ZM90.4642 206.457H114.548C114.326 202.387 113.105 199.354 110.885 197.356C108.666 195.358 105.928 194.359 102.672 194.359C99.4169 194.359 96.6423 195.432 94.3486 197.578C92.0549 199.65 90.7601 202.609 90.4642 206.457Z" fill="#2D2D2D"/>
                                <path d="M142.217 241.639V182.817H159.086V190.808H159.641C160.899 188.662 162.786 186.628 165.301 184.704C167.817 182.706 171.257 181.707 175.623 181.707C180.062 181.707 183.614 182.743 186.277 184.815C189.015 186.887 191.013 189.439 192.27 192.473H192.492C193.454 190.771 194.712 189.106 196.266 187.478C197.894 185.777 199.891 184.408 202.259 183.372C204.701 182.262 207.549 181.707 210.805 181.707C214.874 181.707 218.241 182.632 220.904 184.482C223.568 186.332 225.529 188.773 226.786 191.807C228.118 194.766 228.784 197.948 228.784 201.351V241.639H211.915V205.569C211.915 202.683 211.175 200.316 209.695 198.466C208.289 196.542 206.143 195.58 203.258 195.58C201.038 195.58 199.225 196.135 197.82 197.245C196.488 198.355 195.489 199.798 194.823 201.573C194.231 203.275 193.935 205.051 193.935 206.901V241.639H177.066V205.569C177.066 202.683 176.326 200.316 174.846 198.466C173.44 196.542 171.294 195.58 168.409 195.58C166.189 195.58 164.376 196.135 162.971 197.245C161.639 198.355 160.64 199.798 159.974 201.573C159.382 203.275 159.086 205.051 159.086 206.901V241.639H142.217Z" fill="#2D2D2D"/>
                                <path d="M260.024 242.749C255.881 242.749 252.44 241.861 249.703 240.085C247.039 238.309 245.042 235.941 243.71 232.982C242.378 229.948 241.712 226.545 241.712 222.771V182.817H258.471V219.442C258.471 222.253 259.211 224.547 260.69 226.323C262.17 228.025 264.353 228.876 267.238 228.876C269.68 228.876 271.604 228.284 273.01 227.1C274.489 225.916 275.562 224.399 276.228 222.549C276.894 220.7 277.227 218.739 277.227 216.667V182.817H294.097V241.639H277.227V233.315H276.561C275.303 235.609 273.342 237.754 270.679 239.752C268.089 241.75 264.538 242.749 260.024 242.749Z" fill="#2D2D2D"/>
                                <path d="M305.405 241.639V230.096L334.927 196.024H306.515V182.817H355.126V194.359L325.604 228.432H355.126V241.639H305.405Z" fill="#2D2D2D"/>
                                <path d="M394.478 242.749C387.893 242.749 382.307 241.343 377.72 238.531C373.132 235.646 369.618 231.909 367.176 227.322C364.808 222.66 363.625 217.629 363.625 212.228C363.625 206.827 364.808 201.832 367.176 197.245C369.618 192.584 373.132 188.847 377.72 186.036C382.307 183.15 387.893 181.707 394.478 181.707C401.063 181.707 406.649 183.15 411.237 186.036C415.824 188.847 419.302 192.584 421.669 197.245C424.111 201.832 425.332 206.827 425.332 212.228C425.332 217.629 424.111 222.66 421.669 227.322C419.302 231.909 415.824 235.646 411.237 238.531C406.649 241.343 401.063 242.749 394.478 242.749ZM394.478 228.986C397.438 228.986 399.916 228.21 401.914 226.656C403.986 225.102 405.577 223.067 406.686 220.552C407.796 217.962 408.351 215.187 408.351 212.228C408.351 209.194 407.796 206.42 406.686 203.904C405.577 201.388 403.986 199.354 401.914 197.8C399.916 196.246 397.438 195.469 394.478 195.469C391.519 195.469 389.003 196.246 386.931 197.8C384.86 199.354 383.269 201.388 382.159 203.904C381.123 206.42 380.605 209.194 380.605 212.228C380.605 215.187 381.123 217.962 382.159 220.552C383.269 223.067 384.86 225.102 386.931 226.656C389.003 228.21 391.519 228.986 394.478 228.986Z" fill="#2D2D2D"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M143.319 0C141.11 0 139.319 1.79086 139.319 4V46.2102H139.693C141.86 42.5144 145.109 39.0098 149.442 35.6963C153.775 32.2554 159.701 30.535 167.221 30.535C174.867 30.535 180.984 32.3191 185.572 35.8875C190.287 39.4558 193.728 43.8526 195.895 49.0776H196.277C197.934 46.1465 200.1 43.2791 202.777 40.4754C205.58 37.5442 209.021 35.1866 213.099 33.4024C217.305 31.4908 222.211 30.535 227.819 30.535C234.828 30.535 240.627 32.128 245.215 35.314C249.802 38.5 253.18 42.7056 255.346 47.9307C257.64 53.0283 258.787 58.5083 258.787 64.3706V118.415C275.288 106.558 286.035 87.1975 286.035 65.3273C286.035 29.248 256.787 0 220.708 0C220.632 0 220.557 0.000127385 220.482 0.000381951C220.463 0.000127592 220.445 0 220.426 0H143.319ZM229.73 130.037V71.6347C229.73 66.6645 228.456 62.5864 225.907 59.4004C223.486 56.0869 219.79 54.4302 214.82 54.4302C210.997 54.4302 207.874 55.386 205.453 57.2976C203.159 59.2092 201.438 61.6943 200.291 64.7529C199.272 67.6841 198.762 70.7426 198.762 73.9287V130.654H220.426L220.463 130.654C220.545 130.655 220.626 130.655 220.708 130.655C223.769 130.655 226.781 130.444 229.73 130.037ZM169.706 130.654V71.6347C169.706 66.6645 168.431 62.5864 165.882 59.4004C163.461 56.0869 159.765 54.4302 154.795 54.4302C150.972 54.4302 147.849 55.386 145.428 57.2976C143.134 59.2092 141.414 61.6943 140.267 64.7529C139.876 65.8759 139.56 67.0176 139.319 68.1781V126.654C139.319 128.864 141.11 130.654 143.319 130.654H169.706Z" fill="#00D588"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/whosemivan" className="portfolio__btn" type="button">all projects</a>
            </div>
        </section>
    );
};

export default Portfolio;

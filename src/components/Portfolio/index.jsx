import React, { useState } from "react";
import "./style.css";

const Portfolio = ({ isPage }) => {
    const [isMore, setIsMore] = useState(false);

    return (
        <section id="portfolio" className={isPage ? "portfolio portfolio--page" : "portfolio"}>
            <h2 className={isPage ? "portfolio__title portfolio__title--page" : "portfolio__title"}>portfolio</h2>
            <div className="portfolio__wrapper">
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">modernbanc - web app</h3>
                        <span className="portfolio__item-date">may 2023 - may 2023</span>
                        <p className="portfolio__item-description">i created a web app - modernbanc. i used next js and scss modules.</p>
                        <ul className="portfolio__item-tools">
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--next">
                                <span className="visually-hidden">nextjs</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--sass">
                                <span className="visually-hidden">scss modules</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--git">
                                <span className="visually-hidden">git</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--figma">
                                <span className="visually-hidden">figma</span>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--modern" width="140" height="133" viewBox="0 0 140 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2005_27)">
                                    <path d="M71.0497 106.553C11.9592 2.42058 10.9368 -27.1565 140.045 37.5576" stroke="url(#paint0_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M64.2967 105.15C12.8911 8.70212 13.3094 -19.4343 133.292 36.1543" stroke="url(#paint1_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M57.522 103.746C13.8013 14.9836 15.6603 -11.712 126.517 34.7509" stroke="url(#paint2_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M50.7691 102.343C14.7332 21.2652 18.0329 -3.98982 119.764 33.3476" stroke="url(#paint3_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M44.0051 100.939C15.6542 27.5467 20.3945 3.73241 113 31.9442" stroke="url(#paint4_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M37.2411 99.538C16.5751 33.8302 22.7562 11.4566 106.236 30.5428" stroke="url(#paint5_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M30.4772 98.1347C17.4961 40.1117 25.1178 19.1788 99.4724 29.1394" stroke="url(#paint6_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M23.7132 96.7313C18.417 46.3933 27.4794 26.901 92.7085 27.7361" stroke="url(#paint7_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M16.9603 95.328C19.3489 52.6748 29.852 34.6233 85.9555 26.3327" stroke="url(#paint8_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M10.1856 93.9246C20.2591 58.9563 32.2029 42.3455 79.1808 24.9294" stroke="url(#paint9_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                </g>
                                <g clip-path="url(#clip1_2005_27)">
                                    <path d="M80.051 29.6967C139.141 133.829 138.266 159.61 9.15781 94.8961" stroke="url(#paint10_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M85.6276 28.9162C137.033 125.364 135.897 151.889 15.9144 96.3002" stroke="url(#paint11_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M92.2139 29.6971C135.935 118.46 133.533 144.166 22.6758 97.7028" stroke="url(#paint12_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M98.7 30.2559C134.736 111.333 131.18 136.444 29.4486 99.1066" stroke="url(#paint13_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M105.193 31.5137C133.544 104.906 128.804 128.721 36.1982 100.509" stroke="url(#paint14_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M111.957 32.9171C132.623 98.6249 126.442 120.998 42.9621 101.912" stroke="url(#paint15_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M118.721 34.3204C131.702 92.3433 124.081 113.276 49.7261 103.316" stroke="url(#paint16_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M125.485 35.7238C130.781 86.0618 121.719 105.554 56.4898 104.719" stroke="url(#paint17_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M132.249 37.1271C129.86 79.7803 119.357 97.8318 63.2537 106.122" stroke="url(#paint18_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                    <path d="M139.002 38.5285C128.928 73.4968 116.985 90.1076 70.0067 107.524" stroke="url(#paint19_linear_2005_27)" stroke-width="1.33971" stroke-linecap="round" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_2005_27" x1="51.9535" y1="58.7194" x2="92.9882" y2="17.6848" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2005_27" x1="48.3517" y1="60.4673" x2="89.3864" y2="19.4326" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2005_27" x1="44.7282" y1="62.2151" x2="85.7629" y2="21.1804" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2005_27" x1="41.1264" y1="63.9629" x2="82.1611" y2="22.9283" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2005_27" x1="37.5137" y1="65.7108" x2="78.5484" y2="24.6761" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2005_27" x1="33.9009" y1="67.4606" x2="74.9356" y2="26.4259" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2005_27" x1="30.2882" y1="69.2084" x2="71.3229" y2="28.1737" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_2005_27" x1="26.6754" y1="70.9563" x2="67.7101" y2="29.9216" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_2005_27" x1="23.0736" y1="72.7041" x2="64.1083" y2="31.6694" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_2005_27" x1="19.4501" y1="74.4519" x2="60.4848" y2="33.4173" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_2005_27" x1="97.2493" y1="73.7342" x2="56.2146" y2="114.769" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_2005_27" x1="100.855" y1="71.9872" x2="59.8199" y2="113.022" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint12_linear_2005_27" x1="104.465" y1="70.2387" x2="63.4302" y2="111.273" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint13_linear_2005_27" x1="108.086" y1="68.4912" x2="67.0518" y2="109.526" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint14_linear_2005_27" x1="111.685" y1="66.7423" x2="70.6501" y2="107.777" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint15_linear_2005_27" x1="115.298" y1="64.9945" x2="74.2629" y2="106.029" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint16_linear_2005_27" x1="118.91" y1="63.2467" x2="77.8756" y2="104.281" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint17_linear_2005_27" x1="122.523" y1="61.4988" x2="81.4881" y2="102.534" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint18_linear_2005_27" x1="126.136" y1="59.751" x2="85.1009" y2="100.786" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <linearGradient id="paint19_linear_2005_27" x1="129.737" y1="58.0012" x2="88.7027" y2="99.0359" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#DEDEDE" />
                                        <stop offset="1" stop-color="#BABABA" />
                                    </linearGradient>
                                    <clipPath id="clip0_2005_27">
                                        <rect width="140" height="106.507" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_2005_27">
                                        <rect width="130.845" height="105.614" fill="white" transform="matrix(-1 0 0 -1 140 132.408)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <a className="portfolio__item-link" href="https://modernbanc.com/">link</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">crypto weteran - landing page</h3>
                        <span className="portfolio__item-date">mar 2023 - mar 2023</span>
                        <p className="portfolio__item-description">i created a landing page - crypto weteran. i used next js and scss modules.</p>
                        <ul className="portfolio__item-tools">
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--next">
                                <span className="visually-hidden">nextjs</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--sass">
                                <span className="visually-hidden">scss modules</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--git">
                                <span className="visually-hidden">git</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--figma">
                                <span className="visually-hidden">figma</span>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--crypto" width="101" height="202" viewBox="0 0 101 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.7866 63.6803L0 24.1177V1.51003C0 0.25286 1.44847 -0.451796 2.43757 0.324195L50.7939 38.2618L98.5557 0.3519C99.5435 -0.432139 101 0.271315 101 1.53245V24.5756L50.8566 63.6372L50.8493 63.6315L50.7866 63.6803ZM1.93659 66.9004C0.714566 65.9484 0 64.486 0 62.9369V39.9676L50.7935 79.5356L101 40.4248V63.3942C101 64.9433 100.285 66.4057 99.0634 67.3576L55.7875 101.07C81.1136 103.714 100.856 125.129 100.856 151.155C100.856 178.969 78.3091 201.516 50.4957 201.516C22.6823 201.516 0.135116 178.969 0.135116 151.155C0.135116 124.948 20.1529 103.417 45.7323 101.017L1.93659 66.9004ZM38.5224 117.154H44.6916V123.319H49.9813V117.154H56.1505V123.401C58.9767 123.564 61.6374 123.972 64.1324 124.623C67.4957 125.492 70.2001 126.923 72.2458 128.914C74.3261 130.876 75.3663 133.54 75.3663 136.905C75.3663 139.121 74.8462 141.098 73.806 142.836C72.8005 144.575 71.4483 146.005 69.7494 147.127C68.0851 148.22 66.2648 148.949 64.2885 149.314C66.0221 149.482 67.7037 149.889 69.3333 150.534C70.9976 151.151 72.4885 152.02 73.806 153.142C75.1583 154.235 76.2158 155.609 76.9786 157.264C77.776 158.89 78.1748 160.825 78.1748 163.068C78.1748 166.181 77.308 168.929 75.5743 171.313C73.8754 173.668 71.379 175.519 68.0851 176.865C64.8441 178.175 60.8658 178.834 56.1505 178.842V185.015H49.9813V178.842H44.6916V185.015H38.5224V178.842H34.1147V178.851H25.3016V172.682H29.7027V129.488H25.3016V123.319H29.7027H34.1147H38.5224V117.154ZM45.2533 168.789H52.3265C54.5455 168.789 56.3485 168.522 57.7354 167.99C59.1569 167.429 60.1971 166.644 60.8559 165.634C61.5147 164.597 61.8441 163.363 61.8441 161.933C61.8441 159.689 60.9772 158.049 59.2436 157.011C57.5447 155.946 55.1523 155.413 52.0664 155.413H45.2533V168.789ZM45.2533 145.57H51.5463C53.384 145.57 54.9096 145.304 56.1231 144.771C57.3713 144.238 58.3075 143.495 58.9316 142.542C59.5903 141.56 59.9197 140.439 59.9197 139.177C59.9197 136.905 59.1223 135.377 57.5273 134.592C55.9324 133.779 53.748 133.372 50.9742 133.372H45.2533V145.57Z" fill="#FFD600" />
                            </svg>
                        </div>
                        <a className="portfolio__item-link" href="https://kwork.ru/portfolio/9405890">link</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">calendar storm</h3>
                        <span className="portfolio__item-date">nov 2022 - dec 2022</span>
                        <p className="portfolio__item-description">i created a react app - calendarStorm. it helps you create really flexible calendars and plan your deals. you can create some timetables and share with someone, for example! created by the team. &nbsp;<span>functionality:</span></p>
                        <ul className="portfolio__item-list">
                            <li className="portfolio__item-list-item">registration/authorization</li>
                            <li className="portfolio__item-list-item">crud</li>
                            <li className="portfolio__item-list-item">dragndrop/resize</li>
                        </ul>
                        <ul className="portfolio__item-tools">
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--react">
                                <span className="visually-hidden">react</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--css">
                                <span className="visually-hidden">css</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--git">
                                <span className="visually-hidden">git</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--figma">
                                <span className="visually-hidden">figma</span>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--calendar" width="155" height="171" viewBox="0 0 155 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="15.0703" width="155" height="155" rx="38.0324" fill="#EDF5FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M38.0324 15.0684C17.0277 15.0684 0 32.0961 0 53.1008C0 53.101 8.17727e-09 53.1013 8.17727e-09 53.1016H155C155 53.1013 155 53.101 155 53.1008C155 32.0961 137.972 15.0684 116.968 15.0684H38.0324Z" fill="#E56353" />
                                <path d="M33.5475 143.102C33.5475 139.932 34.0259 137.122 34.9827 134.67C35.9993 132.218 37.3448 129.976 39.0192 127.942C40.6936 125.849 42.5773 123.846 44.6702 121.933C46.823 119.959 49.0057 117.896 51.2183 115.743C55.1052 112.036 57.9158 108.597 59.65 105.428C61.3842 102.259 62.2513 99.2088 62.2513 96.2786C62.2513 94.0063 61.9224 91.8236 61.2646 89.7306C60.6666 87.5778 59.5603 85.8138 57.9457 84.4384C56.3311 83.063 54.0886 82.3753 51.2183 82.3753C48.7665 82.3753 46.5838 83.0032 44.6702 84.259C42.7566 85.455 41.471 86.9499 40.8132 88.7439C41.4112 89.3419 41.8298 89.9997 42.069 90.7173C42.3082 91.3751 42.4278 92.0329 42.4278 92.6907C42.4278 93.2289 42.2783 93.8269 41.9793 94.4847C41.7401 95.1425 41.2916 95.7106 40.6338 96.1889C39.976 96.6673 39.1089 96.9065 38.0325 96.9065C36.7169 96.8467 35.7003 96.3384 34.9827 95.3817C34.2651 94.4249 33.9063 93.2887 33.9063 91.9731C33.9063 90.7173 34.295 89.3419 35.0724 87.8469C35.8498 86.2921 37.0159 84.857 38.5707 83.5414C40.1853 82.166 42.1587 81.0597 44.4908 80.2225C46.823 79.3255 49.5439 78.877 52.6534 78.877C55.0454 78.877 57.3477 79.176 59.5603 79.774C61.8327 80.3122 63.8658 81.2092 65.6598 82.465C67.4538 83.7208 68.8591 85.3952 69.8757 87.4881C70.9521 89.5213 71.4903 92.0628 71.4903 95.1126C71.4903 96.6075 71.1614 98.2221 70.5036 99.9563C69.9056 101.69 68.889 103.574 67.4538 105.607C66.0784 107.581 64.2844 109.704 62.0719 111.976C59.8593 114.189 57.1384 116.61 53.9092 119.242C49.8429 122.59 46.4941 125.76 43.8629 128.75C41.2916 131.68 39.7966 134.191 39.378 136.284L55.2547 136.733C58.1849 136.793 60.7563 136.793 62.9688 136.733C65.2412 136.673 67.0053 136.225 68.2611 135.387C69.5767 134.49 70.2345 132.876 70.2345 130.544H72.9254L72.3872 143.102H33.5475ZM99.1589 144.537C94.8534 144.537 91.2953 143.909 88.4847 142.653C85.6742 141.337 83.5812 139.723 82.2058 137.809C80.8902 135.896 80.2324 134.072 80.2324 132.338C80.2324 130.962 80.5912 129.826 81.3088 128.929C82.0264 127.972 83.043 127.464 84.3586 127.404C85.435 127.344 86.2721 127.554 86.8701 128.032C87.5279 128.451 87.9764 128.989 88.2156 129.647C88.4548 130.304 88.5744 130.902 88.5744 131.441C88.5744 132.039 88.4847 132.637 88.3053 133.235C88.1259 133.833 87.8867 134.431 87.5877 135.029C88.1857 137.062 89.5312 138.527 91.6242 139.424C93.777 140.321 96.0792 140.769 98.531 140.769C102.777 140.769 106.155 139.603 108.667 137.271C111.238 134.939 112.524 131.56 112.524 127.135C112.524 124.504 112.105 122.022 111.268 119.69C110.431 117.298 108.876 115.355 106.604 113.86C104.332 112.365 101.013 111.677 96.6473 111.797C96.1689 111.797 95.6606 111.826 95.1225 111.886C94.5843 111.886 93.9863 111.916 93.3285 111.976V107.94C93.9863 107.94 94.6142 107.94 95.2122 107.94C95.8101 107.94 96.4081 107.94 97.0061 107.94C100.176 107.94 102.657 107.222 104.451 105.787C106.245 104.352 107.531 102.647 108.308 100.674C109.086 98.7005 109.474 96.8766 109.474 95.2023C109.474 92.7505 109.145 90.5678 108.488 88.6542C107.89 86.6808 106.813 85.156 105.258 84.0796C103.704 82.9434 101.551 82.3753 98.8001 82.3753C96.1091 82.3753 93.8069 83.0929 91.8933 84.5281C89.9797 85.9034 88.7837 87.3386 88.3053 88.8336C88.8435 89.4316 89.2023 90.0296 89.3817 90.6276C89.6209 91.2256 89.7405 91.8535 89.7405 92.5113C89.7405 92.9897 89.591 93.5578 89.292 94.2156C89.0528 94.8136 88.6342 95.3219 88.0362 95.7405C87.4382 96.159 86.6309 96.3683 85.6144 96.3683C84.3586 96.3683 83.4018 95.9198 82.744 95.0229C82.0862 94.1259 81.7573 93.0495 81.7573 91.7937C81.7573 90.1193 82.4151 88.2954 83.7307 86.322C85.0463 84.2889 87.0495 82.5547 89.7405 81.1195C92.4913 79.6245 95.9297 78.877 100.056 78.877C103.285 78.877 106.275 79.3853 109.026 80.4019C111.777 81.4185 113.989 83.0929 115.664 85.4251C117.338 87.6974 118.175 90.7173 118.175 94.4847C118.175 96.3384 117.697 98.2221 116.74 100.136C115.843 101.989 114.318 103.724 112.165 105.338C110.072 106.953 107.172 108.328 103.464 109.464C109.145 110.062 113.6 111.886 116.83 114.936C120.119 117.986 121.763 121.843 121.763 126.507C121.763 130.574 120.687 133.952 118.534 136.643C116.441 139.274 113.66 141.248 110.192 142.563C106.783 143.879 103.106 144.537 99.1589 144.537Z" fill="#596C76" />
                                <rect x="28.7036" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241" />
                                <rect x="57.4075" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241" />
                                <rect x="85.3936" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241" />
                                <rect x="114.097" y="22.2461" width="12.1991" height="12.1991" rx="2.87037" fill="#D15241" />
                                <rect x="31.574" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D" />
                                <rect x="60.2778" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D" />
                                <rect x="88.2639" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D" />
                                <rect x="116.968" width="6.45833" height="28.7037" rx="2.87037" fill="#4D5C7D" />
                            </svg>
                            <svg className="portfolio__item-icon portfolio__item-icon--storm" width="68" height="197" viewBox="0 0 68 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.995211 70.2394L28.7683 1.25308C29.0731 0.495951 29.8074 0 30.6235 0H64.0409C65.4882 0 66.4563 1.48957 65.8686 2.81213L43.4045 53.3672C42.8385 54.641 43.7164 56.0886 45.1075 56.1755L65.9698 57.4784C67.4037 57.568 68.2782 59.095 67.63 60.377L40.4425 114.143C39.8015 115.411 40.6495 116.924 42.0654 117.039L61.7695 118.64C63.2072 118.756 64.0523 120.311 63.3687 121.581L23.7332 195.233C22.6096 197.321 19.4308 196.064 20.0389 193.772L34.3066 139.997C34.6256 138.795 33.7813 137.596 32.5418 137.491L7.9285 135.413C6.5868 135.3 5.73813 133.92 6.24228 132.671L28.2739 78.1103C28.7732 76.8736 27.9453 75.5039 26.6182 75.3713L2.65164 72.9764C1.32546 72.8438 0.49747 71.4757 0.995211 70.2394Z" fill="#F7AC16" />
                            </svg>
                        </div>
                        <a className="portfolio__item-link" href="https://calendar-storm.vercel.app/">link</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">react blog</h3>
                        <span className="portfolio__item-date">oct 2022 - oct 2022</span>
                        <p className="portfolio__item-description">i created a react blog.&nbsp;<span>functionality:</span></p>
                        <ul className="portfolio__item-list">
                            <li className="portfolio__item-list-item">registration/authorization</li>
                            <li className="portfolio__item-list-item">crud</li>
                            <li className="portfolio__item-list-item">filters</li>
                            <li className="portfolio__item-list-item">likes, comments</li>
                        </ul>
                        <ul className="portfolio__item-tools">
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--react">
                                <span className="visually-hidden">react</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--css">
                                <span className="visually-hidden">css</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--git">
                                <span className="visually-hidden">git</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--figma">
                                <span className="visually-hidden">figma</span>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--heart" width="60" height="63" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2651 39.6768C24.3597 44.3386 33.5063 49.5509 40.274 52.0061C45.3426 42.9429 45.7154 25.881 46.1163 22.1407C46.5172 18.4003 43.8535 11.2073 37.8686 12.3869C33.0806 13.3307 30.9291 20.6062 30.4518 24.1259C26.5955 22.5243 17.9837 19.8849 14.387 22.1407C9.89111 24.9603 15.1064 33.8035 20.2651 39.6768Z" fill="#7F0B0C" />
                                <path d="M2.58175 22.0045C1.12429 21.1979 0.854264 22.073 0.700074 22.2502C0.545883 22.4274 0.470373 23.344 1.00699 23.8854C1.67775 24.5621 5.11565 25.1011 7.20092 26.427C9.28619 27.7529 10.605 26.0728 9.9408 24.975C9.27663 23.8771 4.40359 23.0128 2.58175 22.0045Z" fill="#0B0A08" />
                                <path d="M3.48795 32.3966C1.8366 32.1966 1.91102 33.1099 1.83377 33.3322C1.75653 33.5545 2.02676 34.4332 2.72548 34.7335C3.59888 35.109 6.9879 34.3161 9.41436 34.7618C11.8408 35.2075 12.4404 33.1531 11.4167 32.3845C10.3931 31.6159 5.55214 32.6468 3.48795 32.3966Z" fill="#0B0A08" />
                                <path d="M6.31964 40.4477C4.662 40.5854 4.91707 41.465 4.88575 41.6984C4.85442 41.9319 5.29441 42.738 6.03881 42.8911C6.96932 43.0824 10.1312 41.6209 12.5972 41.5672C15.0631 41.5135 15.2407 39.3798 14.0846 38.8337C12.9285 38.2876 8.3917 40.2756 6.31964 40.4477Z" fill="#0B0A08" />
                                <path d="M13.2189 48.9808C11.7666 49.797 12.3607 50.4914 12.4282 50.7169C12.4958 50.9424 13.2279 51.4929 13.9685 51.3219C14.8941 51.1083 17.171 48.4602 19.3935 47.3837C21.616 46.3071 20.8999 44.2909 19.6229 44.2756C18.3459 44.2603 15.0342 47.9607 13.2189 48.9808Z" fill="#0B0A08" />
                                <path d="M20.9273 54.2488C19.666 55.3402 20.3858 55.9013 20.4966 56.1088C20.6075 56.3162 21.434 56.7085 22.1258 56.3924C22.9906 55.9971 24.6967 52.9451 26.6612 51.4439C28.6256 49.9427 27.5242 48.1108 26.2699 48.3523C25.0155 48.5937 22.5038 52.8847 20.9273 54.2488Z" fill="#0B0A08" />
                                <path d="M30.5676 59.4118C29.6414 60.8023 30.4839 61.1498 30.6457 61.3199C30.8075 61.4901 31.7081 61.6462 32.291 61.1557C33.0196 60.5425 33.8547 57.1429 35.3498 55.1685C36.845 53.1941 35.2979 51.7245 34.153 52.2941C33.0082 52.8637 31.7253 57.6736 30.5676 59.4118Z" fill="#0B0A08" />
                                <path d="M42.757 61.0896C42.9591 62.7512 43.8224 62.46 44.0554 62.4823C44.2883 62.5045 45.0713 62.0302 45.1938 61.2755C45.347 60.3322 43.7713 57.2099 43.6206 54.732C43.4699 52.2541 41.3447 52.1598 40.8481 53.344C40.3516 54.5283 42.5044 59.0125 42.757 61.0896Z" fill="#0B0A08" />
                                <path d="M52.0655 54.2274C53.1045 55.5346 53.6871 54.8305 53.897 54.7263C54.1069 54.6221 54.5257 53.8046 54.2362 53.0976C53.8743 52.2138 50.9042 50.3898 49.483 48.3608C48.0619 46.3317 46.204 47.3748 46.3994 48.6451C46.5948 49.9153 50.7667 52.5934 52.0655 54.2274Z" fill="#0B0A08" />
                                <path d="M55.4833 44.5822C56.9687 45.3354 57.2072 44.4511 57.355 44.2684C57.5027 44.0858 57.5454 43.167 56.9898 42.6454C56.2952 41.9935 52.8403 41.5794 50.7089 40.3299C48.5776 39.0804 47.3197 40.8072 48.0228 41.8803C48.7258 42.9534 53.6266 43.6406 55.4833 44.5822Z" fill="#0B0A08" />
                                <path d="M56.7954 35.8624C58.3389 36.4862 58.502 35.5847 58.6339 35.39C58.7657 35.1954 58.7308 34.2763 58.1332 33.8041C57.3862 33.2138 53.9088 33.0961 51.6798 32.033C49.4509 30.97 48.3431 32.798 49.134 33.8072C49.9249 34.8164 54.866 35.0827 56.7954 35.8624Z" fill="#0B0A08" />
                                <path d="M57.2174 25.3041C58.8724 25.4709 58.7798 24.5593 58.8526 24.3354C58.9254 24.1116 58.6378 23.2386 57.9332 22.9524C57.0525 22.5946 53.68 23.4555 51.2451 23.0588C48.8103 22.6621 48.2517 24.7281 49.2904 25.4759C50.3291 26.2237 55.1486 25.0956 57.2174 25.3041Z" fill="#0B0A08" />
                                <path d="M57.307 16.2197C58.9595 16.0295 58.677 15.1584 58.701 14.9241C58.725 14.6898 58.26 13.898 57.5112 13.7686C56.5752 13.6069 53.4606 15.1679 50.9975 15.2997C48.5345 15.4315 48.4238 17.5698 49.5964 18.079C50.769 18.5881 55.2413 16.4573 57.307 16.2197Z" fill="#0B0A08" />
                                <path d="M53.9362 8.18001C55.4891 7.58021 54.9993 6.80776 54.9643 6.57486C54.9294 6.34196 54.2825 5.69228 53.5253 5.75537C52.5789 5.83423 49.9508 8.12918 47.5986 8.87643C45.2465 9.62367 45.6702 11.7219 46.9321 11.92C48.1939 12.118 51.9952 8.92975 53.9362 8.18001Z" fill="#0B0A08" />
                                <path d="M10.67 11.7945C9.87811 10.3224 9.18051 10.9112 8.95558 10.9762C8.73065 11.0413 8.17432 11.7709 8.3345 12.5185C8.53472 13.4529 11.1359 15.7787 12.1766 18.0294C13.2172 20.2802 15.2295 19.5856 15.2613 18.3007C15.2931 17.0157 11.66 13.6347 10.67 11.7945Z" fill="#0B0A08" />
                                <path d="M19.5059 9.54358C19.3105 7.8811 18.4461 8.16881 18.2132 8.14557C17.9803 8.12233 17.1955 8.59344 17.0698 9.34762C16.9128 10.2904 18.476 13.419 18.6166 15.8975C18.7572 18.376 20.8821 18.4791 21.3834 17.2969C21.8847 16.1147 19.7501 11.6217 19.5059 9.54358Z" fill="#0B0A08" />
                                <path d="M27.5972 9.26361C27.6999 7.59273 26.7983 7.72051 26.5733 7.6558C26.3483 7.59109 25.4925 7.91362 25.2351 8.63312C24.9134 9.5325 25.8965 12.8917 25.5953 15.3557C25.2941 17.8197 27.3666 18.3028 28.0695 17.2297C28.7724 16.1566 27.469 11.3522 27.5972 9.26361Z" fill="#0B0A08" />
                                <path d="M34.6904 4.05116C34.9413 2.39624 34.032 2.44225 33.8136 2.35752C33.5952 2.27279 32.7142 2.51689 32.3938 3.2103C31.9934 4.07707 32.6737 7.51143 32.1545 9.93834C31.6352 12.3653 33.6564 13.0333 34.452 12.0278C35.2476 11.0223 34.3768 6.11981 34.6904 4.05116Z" fill="#0B0A08" />
                                <path d="M45.4217 3.1616C46.3531 1.77463 45.512 1.42392 45.3508 1.25317C45.1896 1.08242 44.2896 0.922873 43.7049 1.41117C42.974 2.02154 42.1261 5.41792 40.6235 7.38661C39.1209 9.3553 40.6625 10.8308 41.8095 10.2656C42.9564 9.70034 44.2575 4.89532 45.4217 3.1616Z" fill="#0B0A08" />
                            </svg>
                            <svg className="portfolio__item-icon portfolio__item-icon--heart" width="41" height="46" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.718803 19.7916C0.676726 26.981 4.56376 38.561 8.51243 45.9224C19.814 42.0466 33.194 27.6417 36.402 24.7313C39.6101 21.8208 42.8218 13.561 36.7651 9.93691C31.9197 7.03764 24.4984 11.6354 21.3934 14.2966C19.2984 9.92753 13.9026 0.977872 9.07891 0.132084C3.04923 -0.92515 0.771814 10.7341 0.718803 19.7916Z" fill="#7F0B0C" />
                            </svg>
                        </div>
                        <a className="portfolio__item-link" href="https://whosemivan.github.io/blog-react/#/">link</a>
                    </div>
                </div>

                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">app for creating and completing tests</h3>
                        <span className="portfolio__item-date">jun 2022 - jun 2022</span>
                        <p className="portfolio__item-description">i created an app for creating and completing tests. <span>functionality:</span></p>
                        <ul className="portfolio__item-list">
                            <li className="portfolio__item-list-item">registration/authorization</li>
                            <li className="portfolio__item-list-item">crud</li>
                        </ul>
                        <ul className="portfolio__item-tools">
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--react">
                                <span className="visually-hidden">react</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--css">
                                <span className="visually-hidden">css</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--git">
                                <span className="visually-hidden">git</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--swagger">
                                <span className="visually-hidden">swagger</span>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <div className="portfolio__decorate">
                                <div className="portfolio__decorate-orbit">
                                    <div className="portfolio__decorate-cornea">
                                        <div className="portfolio__decorate-pupil"></div>
                                    </div>
                                </div>
                                <div className="portfolio__decorate-orbit">
                                    <div className="portfolio__decorate-cornea">
                                        <div className="portfolio__decorate-pupil"></div>
                                    </div>
                                </div>
                                <div className="portfolio__decorate-orbit">
                                    <div className="portfolio__decorate-cornea">
                                        <div className="portfolio__decorate-pupil"></div>
                                    </div>
                                </div>
                                <div className="portfolio__decorate-orbit">
                                    <div className="portfolio__decorate-cornea">
                                        <div className="portfolio__decorate-pupil"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="portfolio__item-link" href="https://github.com/whosemivan/testingApp">link</a>
                    </div>
                </div>

                <div className="portfolio__item">
                    <div className="portfolio__description-wrapper">
                        <h3 className="portfolio__item-title">eco tubes - adaptive landing page</h3>
                        <span className="portfolio__item-date">jul 2021 - jul 2021</span>
                        <p className="portfolio__item-description">i created web design, icons and adaptive markup. landing page about how plastic tubes pollute the ocean.</p>
                        <ul className="portfolio__item-tools">
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--html">
                                <span className="visually-hidden">html</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--sass">
                                <span className="visually-hidden">sass</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--js">
                                <span className="visually-hidden">js</span>
                            </li>
                            <li className="portfolio__item-tools-item portfolio__item-tools-item--gulp">
                                <span className="visually-hidden">gulp</span>
                            </li>
                        </ul>
                    </div>

                    <div className="portfolio__image-wrapper">
                        <div className="portfolio__item-picture">
                            <svg className="portfolio__item-icon portfolio__item-icon--tube" width="33" height="48" viewBox="0 0 33 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4.35673" height="49.5378" rx="2.17837" transform="matrix(-0.849081 0.528263 0.528263 0.849081 5.0708 2.18945)" fill="#F98261" />
                                <path d="M11.0957 10.7754C11.0616 11.2814 10.8149 12.5081 10.101 13.3665C9.38706 14.2249 8.03763 14.421 7.45216 14.4117" stroke="#FF9578" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12.9814 13.6016C12.9473 14.1076 12.7006 15.3343 11.9867 16.1927C11.2728 17.051 9.92338 17.2471 9.3379 17.2379" stroke="#FF9578" strokeWidth="2" strokeLinecap="round" />
                                <path d="M14.8691 16.7715C14.835 17.2775 14.5883 18.5042 13.8744 19.3626C13.1605 20.221 11.8111 20.4171 11.2256 20.4078" stroke="#FF9578" strokeWidth="2" strokeLinecap="round" />
                                <ellipse rx="2.32144" ry="2.32144" transform="matrix(-0.441877 0.897076 0.897076 0.441877 4.40388 5.34267)" fill="#EC643E" />
                            </svg>
                            <svg className="portfolio__item-icon portfolio__item-icon--tube" width="58" height="37" viewBox="0 0 58 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4.26468" height="44.8338" rx="2.13234" transform="matrix(0.379317 -0.925267 -0.925267 -0.379317 42.5776 32.418)" fill="#9645FE" />
                                <rect width="4.26468" height="18.2191" rx="2.13234" transform="matrix(0.508705 0.860941 0.860941 -0.508705 38.9082 28.9746)" fill="#9645FE" />
                                <path d="M41.1479 31.4238C40.8232 31.088 40.1539 30.1854 40.0749 29.2611C39.9959 28.3367 40.8311 27.4841 41.2586 27.1733" stroke="#A762FF" strokeWidth="2" strokeLinecap="round" />
                                <path d="M36.6094 29.8906C36.3247 29.5079 35.7625 28.4984 35.791 27.5227C35.8195 26.547 36.7508 25.7338 37.2128 25.4492" stroke="#A762FF" strokeWidth="2" strokeLinecap="round" />
                                <path d="M32.1509 28.3574C31.8662 27.9747 31.304 26.9652 31.3325 25.9895C31.361 25.0138 32.2923 24.2006 32.7543 23.916" stroke="#A762FF" strokeWidth="2" strokeLinecap="round" />
                                <ellipse cx="53.9495" cy="22.5436" rx="2.04497" ry="2.17517" transform="rotate(112.291 53.9495 22.5436)" fill="#7C1AF9" />
                            </svg>
                            <svg className="portfolio__item-icon portfolio__item-icon--tube" width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4.26468" height="44.8338" rx="2.13234" transform="matrix(-0.567465 -0.823398 -0.823398 0.567465 48.1724 16.1562)" fill="#E57BFF" />
                                <rect width="4.26468" height="18.2191" rx="2.13234" transform="matrix(0.740329 -0.672245 -0.672245 -0.740329 45.3223 18.1191)" fill="#E57BFF" />
                                <ellipse cx="35.9758" cy="4.75093" rx="2.20784" ry="2.13978" transform="rotate(55.4264 35.9758 4.75093)" fill="#D961F7" />
                                <path d="M46.2012 17.3203C45.7238 17.4256 44.5275 17.5282 43.5611 17.0967C42.5948 16.6652 42.0909 15.4636 41.9598 14.9167" stroke="#EB9DFF" strokeWidth="2" strokeLinecap="round" />
                                <path d="M42.8423 19.8926C42.3828 19.9088 41.2406 19.8007 40.347 19.2381C39.4535 18.6756 39.0428 17.48 38.9492 16.9525" stroke="#EB9DFF" strokeWidth="2" strokeLinecap="round" />
                                <path d="M39.353 22.5879C38.8897 22.5969 37.7426 22.4695 36.8608 21.8878C35.9791 21.306 35.6043 20.0934 35.5272 19.5598" stroke="#EB9DFF" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <svg className="portfolio__item-icon portfolio__item-icon--tube" width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4.26468" height="44.8338" rx="2.13234" transform="matrix(-0.915154 0.403105 0.403105 0.915154 17.4248 0.919922)" fill="#B0EBE1" />
                                <rect width="4.26468" height="18.2191" rx="2.13234" transform="matrix(-0.521596 -0.853193 -0.853193 0.521596 18.8203 4.08984)" fill="#B0EBE1" />
                                <ellipse cx="3.93678" cy="10.7655" rx="2.20784" ry="2.13978" transform="rotate(-23.7724 3.93678 10.7655)" fill="#A2D2CA" />
                                <path d="M18.1982 3.07617C18.2122 3.56482 18.0888 4.75919 17.4839 5.62753C16.879 6.49586 15.6042 6.76565 15.0424 6.792" stroke="#CAFAF2" strokeWidth="2" strokeLinecap="round" />
                                <path d="M20.0957 6.85742C20.0256 7.31178 19.7053 8.41356 18.9852 9.18583C18.2652 9.95811 17.0138 10.1374 16.4781 10.1305" stroke="#CAFAF2" strokeWidth="2" strokeLinecap="round" />
                                <path d="M22.0894 10.7891C22.0114 11.2459 21.6713 12.3488 20.9346 13.1059C20.1979 13.863 18.9366 14.0039 18.398 13.9796" stroke="#CAFAF2" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <a className="portfolio__item-link" href="https://whosemivan.github.io/eco-tubes/">link</a>
                    </div>
                </div>
                {
                    isMore ?
                        <>
                            <div className="portfolio__item">
                                <div className="portfolio__description-wrapper">
                                    <h3 className="portfolio__item-title">cat energy - adaptive markup</h3>
                                    <span className="portfolio__item-date">mar 2020 - may 2020</span>
                                    <p className="portfolio__item-description">i created an adaptive and cross-browser markup during the course of html academy.</p>
                                    <ul className="portfolio__item-tools">
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--html">
                                            <span className="visually-hidden">html</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--less">
                                            <span className="visually-hidden">less</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--js">
                                            <span className="visually-hidden">js</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--gulp">
                                            <span className="visually-hidden">gulp</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--psd">
                                            <span className="visually-hidden">psd</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio__image-wrapper">
                                    <div className="portfolio__item-picture">
                                        <picture>
                                            <source srcSet="img/cat-energy-mobile.jpg" media="(max-width: 767px)" />
                                            <source srcSet="img/cat-energy-mobile2.jpg" media="(max-width: 1023px)" />
                                            <source srcSet="img/cat-energy-tablet.jpg" media="(max-width: 1439px)" />
                                            <source srcSet="img/cat-energy-desktop.jpg" media="(min-width: 1439px)" />
                                            <img src="img/cat-energy-mobile.jpg" alt="cat energy" />
                                        </picture>
                                    </div>
                                    <a className="portfolio__item-link" href="https://whosemivan.github.io/cat-energy/">link</a>
                                </div>
                            </div>

                            <div className="portfolio__item">
                                <div className="portfolio__description-wrapper">
                                    <h3 className="portfolio__item-title">technomart - markup</h3>
                                    <span className="portfolio__item-date">jan 2020 - mar 2020</span>
                                    <p className="portfolio__item-description">i made markup by design during the course from html academy!</p>
                                    <ul className="portfolio__item-tools">
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--html">
                                            <span className="visually-hidden">html</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--css">
                                            <span className="visually-hidden">css</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--js">
                                            <span className="visually-hidden">js</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--psd">
                                            <span className="visually-hidden">psd</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio__image-wrapper">
                                    <div className="portfolio__item-picture">
                                        <picture>
                                            <source srcSet="img/technomart-mobile.jpg" media="(max-width: 767px)" />
                                            <source srcSet="img/technomart-mobile2.jpg" media="(max-width: 1023px)" />
                                            <source srcSet="img/technomart-tablet.jpg" media="(max-width: 1439px)" />
                                            <source srcSet="img/technomart-desktop.jpg" media="(min-width: 1439px)" />
                                            <img src="img/technomart-mobile.jpg" alt="technomart" />
                                        </picture>
                                    </div>
                                    <a className="portfolio__item-link" href="https://whosemivan.github.io/technomart/">link</a>
                                </div>
                            </div>

                            <div className="portfolio__item">
                                <div className="portfolio__description-wrapper">
                                    <h3 className="portfolio__item-title">keksobooking</h3>
                                    <span className="portfolio__item-date">may 2020 - jul 2020</span>
                                    <p className="portfolio__item-description">website for finding accommodation in japan. one-page site-form, work with DOM, form validation. created during the course of html academy.</p>
                                    <ul className="portfolio__item-tools">
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--html">
                                            <span className="visually-hidden">html</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--css">
                                            <span className="visually-hidden">css</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--js">
                                            <span className="visually-hidden">js</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--psd">
                                            <span className="visually-hidden">psd</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio__image-wrapper">
                                    <div className="portfolio__item-picture">
                                        <picture>
                                            <source srcSet="img/keksobooking-mobile.jpg" media="(max-width: 767px)" />
                                            <source srcSet="img/keksobooking-mobile2.jpg" media="(max-width: 1023px)" />
                                            <source srcSet="img/keksobooking-tablet.jpg" media="(max-width: 1439px)" />
                                            <source srcSet="img/keksobooking-desktop.jpg" media="(min-width: 1439px)" />
                                            <img src="img/keksobooking-mobile.jpg" alt="keksobooking" />
                                        </picture>
                                    </div>
                                    <a className="portfolio__item-link" href="https://github.com/whosemivan/keksobooking">link</a>
                                </div>
                            </div>

                            <div className="portfolio__item">
                                <div className="portfolio__description-wrapper">
                                    <h3 className="portfolio__item-title">online cinema - react app</h3>
                                    <span className="portfolio__item-date">feb 2021 - apr 2021</span>
                                    <p className="portfolio__item-description">i created react app during the course of html academy.</p>
                                    <ul className="portfolio__item-tools">
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--react">
                                            <span className="visually-hidden">react</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--redux">
                                            <span className="visually-hidden">redux</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--git">
                                            <span className="visually-hidden">git</span>
                                        </li>
                                        <li className="portfolio__item-tools-item portfolio__item-tools-item--webpack">
                                            <span className="visually-hidden">webpack</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio__image-wrapper">
                                    <div className="portfolio__item-picture">
                                        <picture>
                                            <source srcSet="img/cinema-mobile.jpg" media="(max-width: 767px)" />
                                            <source srcSet="img/cinema-mobile2.jpg" media="(max-width: 1023px)" />
                                            <source srcSet="img/cinema-tablet.jpg" media="(max-width: 1439px)" />
                                            <source srcSet="img/cinema-desktop.jpg" media="(min-width: 1439px)" />
                                            <img src="img/cinema-mobile.jpg" alt="wtw project" />
                                        </picture>
                                    </div>
                                    <a className="portfolio__item-link" href="https://github.com/whosemivan/1087549-what-to-watch-6">link</a>
                                </div>
                            </div>
                        </>
                        : <button className="portfolio__btn" type="button" onClick={() => setIsMore(true)}>all projects</button>
                }

            </div>
        </section>
    );
};

export default Portfolio;
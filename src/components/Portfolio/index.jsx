import React, { useState } from "react";
import "./style.css";

const Portfolio = ({isPage}) => {
    const [isMore, setIsMore] = useState(false);

    return (
        <section id="portfolio" className={isPage ? "portfolio portfolio--page" : "portfolio"}>
            <h2 className={isPage ? "portfolio__title portfolio__title--page" : "portfolio__title"}>portfolio</h2>
            <div className="portfolio__wrapper">
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
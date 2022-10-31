import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <section className="education">
            <h2 className="education__title">education</h2>
            <div className="education__block">
                <div className="education__container">
                    <div className="education__wrapper">
                        <h3 className="education__wrapper-title">
                            <a className="education__link" href="ithub.ru">
                                ithub college
                                <svg className="education__link-icon" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52H7.2V0H4C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8H11.2V3.2H4.8V4.8ZM12 0H8.8V1.52H12C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#022702" />
                                </svg>
                            </a>
                        </h3>
                        <p className="education__text">web and multimedia development</p>
                        <span className="education__date">sep 2020 - jun 2024</span>
                    </div>
                    <div className="education__wrapper">
                        <h3 class="education__wrapper-title">
                            <a className="education__link" href="https://htmlacademy.ru/">
                                html academy
                                <svg className="education__link-icon" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52H7.2V0H4C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8H11.2V3.2H4.8V4.8ZM12 0H8.8V1.52H12C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#022702" />
                                </svg>
                            </a>
                        </h3>
                        <p className="education__text">react developer course</p>
                        <span className="education__date">jan 2020 - apr 2021</span>
                    </div>
                </div>
                <div className="education__certificates">
                    <h2 className="education__certificates-title">10 certificates</h2>
                    <div className="education__certificates-wrapper">
                        <picture>
                            <source srcSet="img/cert.jpg" media="(max-width: 767px)" />
                            <source srcSet="img/cert1-tablet.jpg" media="(max-width: 1023px)" />
                            <source srcSet="img/html-cert-tablet2.jpg" media="(max-width: 1439px)" />
                            <source srcSet="img/html1-cert-desk.jpg" media="(min-width: 1439px)" />
                            <img src="img/cert.jpg" alt="certificate!" />
                        </picture>
                        <picture>
                            <source srcSet="img/cert1.jpg" media="(max-width: 767px)" />
                            <source srcSet="img/cert2-tablet.jpg" media="(max-width: 1023px)" />
                            <source srcSet="img/html2-cert-tablet2.jpg" media="(max-width: 1439px)" />
                            <source srcSet="img/html2-cert-desk.jpg" media="(min-width: 1439px)" />
                            <img src="img/cert1.jpg" alt="certificate!" />
                        </picture>
                        <picture>
                            <source srcSet="img/cert2.jpg" media="(max-width: 767px)" />
                            <source srcSet="img/react-cert-tablet.jpg" media="(max-width: 1023px)" />
                            <source srcSet="img/react-cert-tablet2.jpg" media="(max-width: 1439px)" />
                            <source srcSet="img/react-cert-desk.jpg" media="(min-width: 1439px)" />
                            <img src="img/cert2.jpg" alt="certificate!" />
                        </picture>
                    </div>
                    <Link className="education__certificates-link" to="/all-certificates">all certificates</Link>
                </div>
            </div>
        </section>
    );
};

export default Education;
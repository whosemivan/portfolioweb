import React from "react";
import "./style.css";

const Experience = () => {
    return (
        <section className="experience">
            <h2 className="experience__title">experience</h2>
            <div className="experience__wrapper">
                <div className="experience__item">
                    <h3 className="experience__item-title">react native developer</h3>
                    <a className="experience__link" href="https://ithub.ru/">
                        ithub
                        <svg className="experience__link-icon" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52H7.2V0H4C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8H11.2V3.2H4.8V4.8ZM12 0H8.8V1.52H12C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#022702" />
                        </svg>
                    </a>
                    <span className="experience__date">apr 2022 - jun 2022 (3 month)</span>
                    <p className="experience__text">
                        i took part in the development of a PWA application.
                        my main task was to create components according to ui design, implement some functionality. i work as a team member. it was a project work for 3 month.
                    </p>
                </div>
                <div className="experience__item">
                    <h3 className="experience__item-title">web developer</h3>
                    <a className="experience__link" href="#">freelance</a>
                    <span className="experience__date">may 2021 - present</span>
                    <p className="experience__text">
                        i worked as a freelancer. successfully completed several orders, i create a web design and frontend.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
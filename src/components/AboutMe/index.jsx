import React from "react";
import "./style.css";

const AboutMe = () => {
    return (
        <section className="about">
            <div className="about__wrapper">
                <div className="about__block">
                    <h1 className="about__title">more about me</h1>
                    <p className="about__text">
                        hi, i’m Ivan Semyonenko, a frontend developer at amoCRM. create frontend since 2020 !!
                    </p>
                    <code className="code code--animate about__code">{"// import React from 'react';"}</code>
                </div>
                <div className="about__image-block">
                    <picture>
                        <source srcSet="img/new_me.jpg" media="(max-width: 767px)" />
                        <source srcSet="img/new_me.jpg" media="(max-width: 1023px)" />
                        <source srcSet="img/new_me.jpg" media="(max-width: 1439px)" />
                        <source srcSet="img/new_me.jpg" media="(min-width: 1439px)" />
                        <img className="about__image" src="img/new_me.jpg" alt="me !!" />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

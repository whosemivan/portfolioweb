import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const FirstScreen = () => {

    document.addEventListener("mousemove", (evt) => {
        const eyes = document.querySelectorAll(".first-screen__decorate-orbit");
        [].forEach.call(eyes, function (eye) {
            let mouseX = eye.getBoundingClientRect().right;
            let mouseY = eye.getBoundingClientRect().top;
            if (eye.classList.contains("eye-left")) {
                mouseX = eye.getBoundingClientRect().left;
            }
            let radianDegrees = Math.atan2(evt.pageX - mouseX, evt.pageY - mouseY);
            let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
            eye.style.transform = `rotate(${rotationDegrees}deg)`;
        })
    });

    return (
        <section className="first-screen">
            <div className="first-screen__wrapper">
                <h1 className="first-screen__title">frontend developer</h1>
                <p className="first-screen__text">hi, i’m alienba6y, a frontend developer based in moscow. create frontend since 2020. really like react!</p>
                <code className="code code--animate">{"// import React from 'react';"}</code>
                <Link className="first-screen__link" to="/portfolio">my projects</Link>
                <div className="first-screen__decorate">
                    <div className="first-screen__decorate-orbit eye-left">
                        <div className="first-screen__decorate-cornea">
                            <div className="first-screen__decorate-pupil"></div>
                        </div>
                    </div>
                    <div className="first-screen__decorate-orbit">
                        <div className="first-screen__decorate-cornea">
                            <div className="first-screen__decorate-pupil"></div>
                        </div>
                    </div>
                    <div className="first-screen__decorate-orbit eye-left">
                        <div className="first-screen__decorate-cornea">
                            <div className="first-screen__decorate-pupil"></div>
                        </div>
                    </div>
                    <div className="first-screen__decorate-orbit">
                        <div className="first-screen__decorate-cornea">
                            <div className="first-screen__decorate-pupil"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;
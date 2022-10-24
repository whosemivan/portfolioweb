import React from "react";
import "./style.css";

const FirstScreen = () => {
    return (
        <section className="first-screen">
            <div className="first-screen__wrapper">
                <h1 className="first-screen__title">frontend developer</h1>
                <p className="first-screen__text">hi, i’m alienba6y, a frontend developer based in moscow. create frontend since 2020. really like react!</p>
                <code className="first-screen__code first-screen__code--animate">// import React from 'react';</code>
                <a className="first-screen__link" href="#">my projects</a>
                <div className="first-screen__decorate">
                    <div className="first-screen__decorate-orbit">
                        <div className="first-screen__decorate-cornea">
                            <div className="first-screen__decorate-pupil"></div>
                        </div>
                    </div>
                    <div className="first-screen__decorate-orbit">
                        <div className="first-screen__decorate-cornea">
                            <div className="first-screen__decorate-pupil"></div>
                        </div>
                    </div>
                    <div className="first-screen__decorate-orbit">
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
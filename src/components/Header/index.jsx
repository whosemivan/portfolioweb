import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Header = ({active}) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__navbar">
                <button onClick={() => setNavOpen(!navOpen)} className={navOpen ? "header__ham-box header__ham-box--open" : "header__ham-box"}>
                    <span className={navOpen ? "header__line-top spin" : "header__line-top"}></span>
                    <span className={navOpen ? "header__line-bottom spin" : "header__line-bottom"}></span>
                </button>
            </div>

            <div className={navOpen ? "header__overlay header__overlay--animation" : "header__overlay"} style={{
                top: navOpen ? "0" : "-100vh",
                transitionDelay: navOpen ? "0s" : "0s"
            }}>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link className={active === "main" ? "header__list-link header__list-link--active" : "header__list-link"} onClick={() => setNavOpen(!navOpen)} to="/" style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.8s" : "0s"
                            }}>main</Link>
                            <div className="header__item-wrapper"></div>
                        </li>
                        <li className="header__list-item">
                            <Link className={active === "portfolio" ? "header__list-link header__list-link--active" : "header__list-link"} onClick={() => setNavOpen(!navOpen)} to="/portfolio" style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.9s" : "0s"
                            }}>portfolio</Link>
                            <div className="header__item-wrapper"></div>
                        </li>
                        <li className="header__list-item">
                            <a className="header__list-link" onClick={() => setNavOpen(!navOpen)} href="#contact" style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s"
                            }}>contact me</a>
                            <div className="header__item-wrapper"></div>
                        </li>
                        <li className="header__list-item">
                            <Link className={active === "about" ? "header__list-link header__list-link--active" : "header__list-link"} onClick={() => setNavOpen(!navOpen)} to="/about" style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1.1s" : "0s"
                            }}>more about me</Link>
                            <div className="header__item-wrapper"></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
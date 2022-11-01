import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <Link className="not-found__link" to="/">home</Link>
        </section>
    );
};

export default NotFound;
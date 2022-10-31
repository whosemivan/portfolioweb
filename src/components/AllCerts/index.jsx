import React from "react";
import "./style.css";

const AllCerts = () => {
    return (
        <section className="all-certs">
            <h1 className="all-certs__title">all certificates</h1>
            <div className="all-certs__wrapper">
                <picture>
                    <source srcSet="img/certificates/html1-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/html1-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/html1-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/html2-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/html2-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/html2-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/js-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/js-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/js-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/react-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/react-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/react-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/api-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/api-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/api-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/htmlcss-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/htmlcss-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/htmlcss-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/word-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/word-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/word-mobile.jpg" alt="certificate" />
                </picture>
                <picture>
                    <source srcSet="img/certificates/power-mobile.jpg" media="(max-width: 1439px)" />
                    <source srcSet="img/certificates/power-desk.jpg" media="(min-width: 1439px)" />
                    <img src="img/certificates/power-mobile.jpg" alt="certificate" />
                </picture>
            </div>
        </section>
    );
};

export default AllCerts;
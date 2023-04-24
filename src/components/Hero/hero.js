import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="hero--general">
                        <div className="hero--general__block">
                            <h1>
                                Hello, I'm
                                <span>
                                Azimjanov Bakyt
                            </span>. <br/>
                                I'm a Front-end web developer.

                            </h1>
                            <div className="hero--general__block--btn">
                                <a href="#about">
                                    <button>
                                        View my work
                                        <span className="icon">
                                            {/*<AiOutlineArrowRight/>*/}
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
<path
    d="M11.4775 0.642687C11.0917 0.330747 10.4698 0.333788 10.0886 0.649469C9.70739 0.96515 9.71108 1.47393 10.0969 1.78587L15.5523 6.19642H2.14285C1.60042 6.19642 1.16071 6.55616 1.16071 6.99999C1.16071 7.44382 1.60042 7.80356 2.14285 7.80356H15.5505L10.0969 12.2127C9.71108 12.5246 9.70739 13.0334 10.0886 13.349C10.4698 13.6647 11.0917 13.6678 11.4775 13.3559L18.4916 7.68515C18.9585 7.30766 18.9585 6.69084 18.4916 6.31336L11.4775 0.642687Z"
    fill="white" stroke="white" strokeWidth="0.5"/>
</svg>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default Hero;
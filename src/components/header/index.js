import React, {useState} from 'react';
import "../About/about"

const Header = () => {
    const [scroll, setScroll] = useState(0)

    window.addEventListener("scroll", () => setScroll(window.scrollY))

    return (
        <>
            <header id="header">
                <div className="container">
                    {/*{scroll}*/}
                    <div className="header--general">
                        <a href="#" style={{color: scroll < 850 ? "#e31b6d" : "white"}}>HOME</a>
                        <a href="#about" style={{color: scroll > 850 && scroll < 1854 ? "#e31b6d" : "white"}}>ABOUT</a>
                        <a href="#projects" style={{color: scroll > 1854 && scroll < 2817 ? "#e31b6d" : "white"}}>PROJECTS</a>
                        <a href="#contact" style={{color: scroll > 2817 ? "#e31b6d" : "white"}}>CONTACT</a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
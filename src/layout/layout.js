import React from 'react';
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({children}) => {
    return (
        <>
            <div className="main">
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;
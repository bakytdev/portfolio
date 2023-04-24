import React from 'react';

const Contact = () => {
    return (
        <>

            <section id="contact">
                <div className="container">
                    <div className="contact--general">

                        <div className="contact--general__text">

                            <h1 data-aos="fade-right">
                                CONTACT
                            </h1>

                            <div data-aos="fade-right"></div>

                        </div>

                        <div className="contact--general__block">

                            <p>
                                Have a question or want to work together?
                            </p>

                            <div className="contact--general__block--input">
                                <input type="name"  placeholder="Name"/>
                                <input type="email"  placeholder="Enter email"/>
                                <textarea placeholder="Your Message" type="text" name="message"></textarea>
                            </div>

                            <div className="contact--general__block--btn">
                                <button>SUBMIT</button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;
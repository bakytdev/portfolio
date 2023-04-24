import React from 'react';
import me from '../../img/me.jpg'
import iconOne from '../../img/icon-one.png'
import iconTwo from '../../img/icon-two.png'
import iconThree from '../../img/icon-three.png'
import iconFour from '../../img/icon-four.png'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="about--general">

                        <div className="about--general__text">
                            <h1 data-aos="fade-up-right">ABOUT</h1>
                            <div data-aos="fade-up-right"></div>
                        </div>

                        <div className="about--general__block">
                            <div className="about--general__block--one">
                                <div>
                                    <img className='about--general__block--one__imgOne' src={iconOne} alt="img"/>
                                </div>
                                <h2>
                                    Fast
                                </h2>
                                <p>
                                    Fast load times and lag free <br/> interaction, my highest
                                    priority.
                                </p>
                            </div>
                            <div className="about--general__block--one">
                                <div>
                                    <img className='about--general__block--one__imgTwo' src={iconTwo} alt="img"/>
                                </div>
                                <h2>
                                    Responsive
                                </h2>
                                <p>
                                    My layouts will work on any <br/> device, big or small.
                                </p>
                            </div>
                            <div className="about--general__block--one">
                                <div>
                                    <img className='about--general__block--one__imgThree' src={iconThree} alt="img"/>
                                </div>
                                <h2>
                                    Intuitive
                                </h2>
                                <p>
                                    Strong preference for easy to <br/> use, intuitive UX/UI.
                                </p>
                            </div>
                            <div className="about--general__block--one">
                                <div>
                                    <img className='about--general__block--one__imgFour' src={iconFour} alt="img"/>
                                </div>
                                <h2>
                                    Dynamic
                                </h2>
                                <p>
                                    Websites don't have to be static, I love <br/>making pages come
                                    to life.
                                </p>
                            </div>
                        </div>

                        <div className="about--general__me">

                            <div className="about--general__me--text">
                                <img src={me} alt=""/>
                                <h2>
                                    Who's this guy?
                                </h2>
                                <p>
                                    I am a front-end developer
                                    I have a serious passion for UI effects, animations and creating intuitive, dynamic user interfaces.
                                    Let's do something special.
                                </p>
                            </div>

                            <div className="about--general__me--line">
                                <div className="about--general__me--line__one block">
                                    <h1>HTML</h1>
                                    <div data-aos="fade-down-right"></div>
                                    <span>90%</span>
                                </div>
                                <div className="about--general__me--line__one block">
                                    <h1>CSS</h1>
                                    <div data-aos="fade-down-right"></div>
                                    <span>90%</span>
                                </div>
                                <div className="about--general__me--line__two block">
                                    <h1>SCSS</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>85%</span>
                                </div>
                                <div className="about--general__me--line__three block">
                                    <h1>JavaScript</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>80%</span>
                                </div>
                                <div className="about--general__me--line__four block">
                                    <h1>React</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>75%</span>
                                </div>
                                <div className="about--general__me--line__four block">
                                    <h1>Redux</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>75%</span>
                                </div>
                                <div className="about--general__me--line__five block">
                                    <h1>TypeScript</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>50%</span>
                                </div>
                                <div className="about--general__me--line__six block">
                                    <h1>Bootstrap</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>70%</span>
                                </div>
                                <div className="about--general__me--line__two block">
                                    <h1>Tailwind</h1>
                                    <div data-aos="fade-down-right"> </div>
                                    <span>85%</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
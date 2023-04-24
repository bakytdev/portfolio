import React, {useEffect, useState} from 'react';
import data, {DataTab} from "./data";


const Tabs = () => {


    const [filterData, setFilterData] = useState(data)
    const [tab, setTab] = useState([])


    const filterTab = (e) => {
        setTab(filterData.filter(el => el.catigory === e.params))
    }

    useEffect(() => {
        setTab(data)
    }, [])

    return (
        <section id="projects">
            <div className="container">
                <div className="projects">

                    <div className="projects--text">
                        <h1>PROJECTS</h1>
                        <div className="projects--text__line"></div>
                    </div>

                    <div className="projects--title">
                        {
                            DataTab.map(el => (
                                <h3 onClick={() => filterTab(el)}
                                    className={`${el.name}`}
                                >{el.title}</h3>
                            ))
                        }
                    </div>

                    <div className="projects--block">
                        {
                            tab.map(el => (
                                <div className='projects--block__tab'>
                                    <h1>{el.name}</h1>
                                    <img src={el.img} alt="img"/>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tabs;
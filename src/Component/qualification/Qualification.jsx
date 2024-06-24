import React, { useState } from 'react'
// import React from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState]=useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
   <section className="qualification section">
    <h2 className='section__title'>Qualification</h2>
    <span className="section__subtitle">
        My Journey
    </span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active  button--flex" : "qualification__button button--flex"}
             onClick={() => toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification__icon">Education</i>
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active  button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}>
                <i className="uil uil-graduation-cap qualification__icon">Internship</i>
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState ===1 ? "qualification__content qualification__content-active"
             : "qualification__content"} 
            onClick={() => toggleTab(1)}
            >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachelor of Engineering</h3>
                        <span className="qualification__subtitle">PES Institute Of Technology & Management</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2019 - 2022 
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Java FullStack Developer</h3>
                        <span className="qualification__subtitle">Jspider</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022-2023 <br/> &#65339; 7 Month &#65341;
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Diploma</h3>
                        <span className="qualification__subtitle">DVS Polytechnic</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2016 - 2019
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>
                </div>
                
                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Design & Development of Embedded System & IOT</h3>
                        <span className="qualification__subtitle">Inventron Technologies & Business Solution LLP</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021-2021<br/> &#65339; 1 Month &#65341;
                        </div>
                    </div>
                </div>
            </div>

            <div  className={toggleState ===2 ? "qualification__content qualification__content-active" 
            : "qualification__content"}
             onClick={() => toggleTab(2)}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachelor of Engineering</h3>
                        <span className="qualification__subtitle">PES Institute Of Technology & Management</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2019 - 2022 
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Java FullStack Developer</h3>
                        <span className="qualification__subtitle">Jspider</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2022-2023 <br/> &#65339; 7 Month &#65341;
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Diploma</h3>
                        <span className="qualification__subtitle">DVS Polytechnic</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2016 - 2019
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>
                </div>
                
                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualifiaction__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Design & Development of Embedded System & IOT</h3>
                        <span className="qualification__subtitle">Inventron Technologies & Business Solution LLP</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021-2021<br/> &#65339; 1 Month &#65341;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualification

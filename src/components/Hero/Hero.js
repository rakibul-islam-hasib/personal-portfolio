import React from 'react';
import './Hero.css'
const Hero = () => {
    return (
        <div className='container'>
            <div className="title">
                <h2>Hello,I'm Marlon Simon <span className="red-title">UX-UI Designer</span></h2>
                <div className="resume">
                    <p>Download Resume</p>
                    {/* < className="hr"></div> */}
                    <hr className='hr' />
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
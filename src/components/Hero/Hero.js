import React from 'react';
import './Hero.css'
import hero_image from './img/img.png'
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
            {/* Image part */}
            <div className="image">
                <img src={hero_image} alt="" />
            </div>

        </div>
    );
};

export default Hero;
import React from 'react';
import AboutImg from '../images/about_us.avif'
import './About.css';

const About = () => {
    return (
        <div className='about-main'>
            <div className='about'>
                <h1 className='font-semibold text-5xl text-indigo-900'>About Us</h1>
                <p className='text-indigo-900 text-base pt-5'>EdTech is fast growing Education and Software Service platform that keeps culture and creativity at the heart of everything we do. Our mission is to help customers unlock to creativity and build exceptional content using uniqely powerful design platform and our tirelessly helpful support and education resource.</p>
            </div>
            <div className='about-image'>
                <img src={AboutImg} alt="About Us" />
            </div>
        </div>
    );
};

export default About;
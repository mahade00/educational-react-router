import React from 'react';
import './HeadBanner.css';
import Image from '../images/headBan.jpg';

const HeadBanner = () => {
    return (
        <div className='head-banner'>
            <div data-aos="fade-right" data-aos-duration="2000">
                <h1 className='text-5xl text-[#2c2370] font-bold leading-normal'>Improve Your Online <br />Learning Experiance <br />Better Instantly</h1><br/>
                <p className='text-violet-400'>We have 50+ online courses and 20k+ online registered members. Find <br/> your desired course from them.</p><br />
                <button className='banner-btn'>Get Started</button>
                <button className='banner-btn ml-4'>Browse Courses</button>
            </div>            
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <img src={Image} alt='headban'/>
            </div>
        </div>
    );
};

export default HeadBanner;
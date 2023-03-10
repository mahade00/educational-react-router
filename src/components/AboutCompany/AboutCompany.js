import React from 'react';
import CompanyImg from '../images/company2.png';
import VerifiedIcon from '@mui/icons-material/Verified';
import './AboutCompany.css'

const AboutCompany = () => {
    return (
        <div className='about-company-main'>
            <div data-aos="fade-right" data-aos-duration="1600">
                <img src={CompanyImg} alt='About Company'/>
            </div>
            <div className='about-company' data-aos="fade-up-left" data-aos-duration="1600">
                <h2 className='font-sans  font-semibold text-4xl text-[#2c2370]'>About EdTech Company</h2><br/>
                <p className='text-violet-900'>Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits. These aims may include the development of understanding, rationality, kindness, and honesty. Various researchers emphasize the role of critical thinking in order to distinguish education from indoctrination. </p><br/>
                <p className='font-semibold text-violet-900'> <span className='text-[#FF8E7F]'><VerifiedIcon/> </span>Industry Expert Instructor</p>
                <p className='font-semibold text-violet-900'><span className='text-[#FF8E7F]'><VerifiedIcon/> </span> Course Certificate for Prticular Course</p>

            </div>
        </div>
    );
};

export default AboutCompany;
import React from 'react';
import CompanyImg from '../images/company2.png';
import VerifiedIcon from '@mui/icons-material/Verified';
import './AboutCompany.css'

const AboutCompany = () => {
    return (
        <div className='about-company-main'>
            <div>
                <img src={CompanyImg} alt='About Company'/>
            </div>
            <div>
                <h2 className='font-sans  font-semibold text-4xl'>About EdTech Company</h2>
                <p>Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits. These aims may include the development of understanding, rationality, kindness, and honesty. Various researchers emphasize the role of critical thinking in order to distinguish education from indoctrination. </p>
                <p><VerifiedIcon/> Industry Expert Instructor</p>
                <p><VerifiedIcon/> Course Certificate for Prticular Course</p>

            </div>
        </div>
    );
};

export default AboutCompany;
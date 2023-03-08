import React from 'react';
// import AOS from 'aos';
import './HomeData.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HomeData = (props) => {
    const { name, subject, rating,img } = props;
    return ( 
               
        <div data-aos="fade-up"
     data-aos-duration="2000">    
            
                 <div className='instructors-details'>
             <img className='content-center ' src={ img} alt=''/>
            <p className="text-lg font-medium text-[#2c2370] ">{name}</p>
            <p  className='text-[#2c2370]'><span className='text-base font-semibold' >Expert Field:</span>{subject}</p>
                <p><span className='text-base font-semibold text-[#2c2370]'> Student Satisfaction Rate:</span> {rating}</p>
               
                <div className='social-icons'>
                    <a  className='text-[#2c2370]' href='git'><GitHubIcon /> </a>
                <a  className='text-[#2c2370]' href='linkedIn'><LinkedInIcon /> </a>
                <a  className='text-[#2c2370]' href='web'><LanguageIcon /></a> 
                </div>
                  

            </div>
            
           
           
        </div>
    );
};

export default HomeData;
import React from 'react';
import './WhyChooseUs.css'
import GroupIcon from '@mui/icons-material/Group';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const WhyChooseUs = () => {
    return (
        <div className='why-choose-main my-10 ' data-aos="flip-down" data-aos-duration="1500">
            <h1 className='font-sans  font-semibold text-4xl text-[#2c2370] mb-5'>Why Choose Us</h1>
            <div className='why-choose '>
                <div className='why-choose-each bg-slate-50'>
                    <p><GroupIcon className='material-icons' sx={ {fontSize:50}}/></p>
                <h1 className='font-bold text-[#2c2370]  '>Expert Instructor</h1>
                <p className='text-violet-500'> We have Expert and Experienced Instructors</p>
            </div>
                <div className='why-choose-each bg-slate-50'>
                    <p><LocalLibraryIcon className='material-icons' sx={ {fontSize:50}}/></p>
                <h1 className='font-bold text-[#2c2370]'>Flexible Learning</h1>
                <p className='text-violet-500'>EdTech is flexible space for learners</p>
            </div>
                <div className='why-choose-each bg-slate-50'>
                    <p><SupportAgentIcon className='material-icons' sx={ {fontSize:50}}/></p>
                <h1 className='font-bold text-[#2c2370]'>Educator Support</h1>
                <p className='text-violet-500'>We provide instant support to our students.</p>
            </div>
            </div>
           
        </div>
    );
};

export default WhyChooseUs;
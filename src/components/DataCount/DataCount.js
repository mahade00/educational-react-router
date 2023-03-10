import React from 'react';
import './DataCount.css';
import SchoolIcon from '@mui/icons-material/School';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';

const DataCount = () => {
    return (
        <div className='data-count-main mt-12 bg-[#2c2370]  ' data-aos="flip-up" data-aos-duration="1500">
            <div className='data-count '>
                <div >
<p><SchoolIcon className='data-icon' sx={ {fontSize:50}}/></p>
                <h1 className='text-6xl font-bold mt-2 text-white'>550+</h1>
                <p className='font-medium text-white'>Students Enrolled</p>
            </div>
            <div>
                <p><AddReactionIcon className='data-icon'  sx={ {fontSize:50}}/></p>
                <h1 className='text-6xl font-bold mt-2 text-white'>100+</h1>
                <p className='font-medium text-white'>Satisfaction Rate</p>
            </div>
            <div>
                <p><ImportContactsIcon className='data-icon'  sx={ {fontSize:50}}/></p>
                <h1 className='text-6xl font-bold mt-2 text-white'>330+</h1>
                <p className='font-medium text-white'>Academics Programs</p>
            </div>
            <div>
                <p><FilterFramesIcon  className='data-icon' sx={ {fontSize:50}}/></p>
                <h1 className='text-6xl font-bold mt-2 text-white'>40+</h1>
                <p className='font-medium text-white'>Online Instructors</p>
            </div>
            </div>
            
        </div>
    );
};

export default DataCount;
import React from 'react';
import './Courses.css'
import DataImage from '../images/course-1.jpg'
import { Rating } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

const Courses = () => {
    return (
        <div className='courses-main'>
            <div className='courses-each'>
                <img src={DataImage} alt="Data Science" srcset="" />
                <div className='courses-rating'>
                    <p className='text-yellow-500 pl-5'>5.0</p>
                    <Rating name="size-small" defaultValue={5} size="small" className='pr-4'/>
                    <p className='font-semibold text-violet-900'>(32)</p>
                 </div>
               
                <h1 className='font-bold text-indigo-800 pl-5'>Data Science</h1>
                <div className='courses-detail'>
                    <PersonAddAltOutlinedIcon className='courses-detail-icon 'sx={ {fontSize:15}} />
                    <p>Enroll 26</p>
                    <LocalLibraryOutlinedIcon className='courses-detail-icon '  sx={ {fontSize:15}}/>
                    <p>12 lessons</p>
                    <AccessAlarmOutlinedIcon className='courses-detail-icon'sx={ {fontSize:15}} />
                    <p>Start 01-01-2023</p>
                </div>
                <div className='course-instructor-n-price pt-3'>
                    <h3 className='pl-5'>By<span className='font-bold text-blue-900 pl-2 '>Richard</span> </h3>
                    <p className='font-semibold text-indigo-600'>$34</p>
                </div>   
                <div className='courses-cart'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
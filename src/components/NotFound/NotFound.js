import React from 'react';
import './NotFound.css';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFound = () => {
    return (
        <div className='notfound-main'>
            <h1 className='font-bold text-9xl text-indigo-900'> 4<SentimentVeryDissatisfiedIcon className='notfound-icon  ' sx={ {fontSize:130}}/>4</h1>
            <h2 className='text-2xl text-indigo-900 font-semibold'>Page Not Found</h2>
        </div>
    );
};

export default NotFound;
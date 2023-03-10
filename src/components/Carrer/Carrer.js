import React from 'react';
import './Carrer.css';
import CarrerImg from '../images/joinWithUs.png';

const Carrer = () => {
    return (
        <div className='carrer-main'>
            <div>
                <div className='carrer '>
                    <h1 className='font-bold text-5xl text-indigo-900'>Join With Us</h1>
                    <p className='font-medium text-lg text-indigo-900'>If you think you are suitable to work with us , send your CV</p>
                </div>
                 <div>
                    <buttton className='carrer-btn'>See Open Jobs</buttton>
                </div>
            </div>
            <div className='carrer-img ml-10'>
                <img src={CarrerImg} alt="carrer" />
            </div>
            
        </div>
    );
};

export default Carrer;
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-main'>
            <div className='contact-name'>
                <div >
                    <p className='font-medium text-indigo-900'>First Name:</p>
                    <input className='input-text' />
                </div>
                <div>
                    <p className='font-medium text-indigo-900'>Last Name:</p>  
                    <input className='input-text' /> 
                </div>                  
            </div>
            <div className='contact-sub font-medium text-indigo-900 pt-5 '>
                <p className='pl-14'>Contact Number:</p>
                <input className='input-sub' />
            </div>
            <div className='contact-sub font-medium text-indigo-900 pt-5'>
                <p>Subject:</p>
                <input className='input-sub'/>
            </div>
            <div className='contact-messge font-medium text-indigo-900 pt-5'>
                <p>Message:</p>
                <input className='input-message'/>
            </div>
            <div>
                <button className='contact-btn'>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;
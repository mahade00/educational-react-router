import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className='pricing-main'>
            <div className='pricing bg-rose-100 '>
                <h1 className='font-medium text-3xl text-violet-900 pt-4'>Basic</h1>
                <p className='font-bold text-4xl text-violet-900 py-6'> <sup>$</sup>50<sub>/Mo</sub></p>
                <div className='pricing-feature pt-2  font-medium text-lg text-indigo-900 leading-loose'>
                    <p>Single Access   </p>
                    <p>Self Learning System</p>
                    <p>Unlimited Overview</p>
                    <p>Up to 5 Areas of Interests</p>
                    <p>Course Completation Certificate</p>
                </div>
                <div>
                    <button className='pricing-btn'>Active Your Plan</button>
                </div>
            </div>
            <div className='pricing bg-rose-100 mx-10'>
                <h1 className='font-medium text-3xl text-violet-900 pt-4'>Standard</h1>
                <p className='font-bold text-4xl text-violet-900 py-6'> <sup>$</sup>100<sub>/Mo</sub></p>
                <div className='pricing-feature pt-2  font-medium text-lg text-indigo-900 leading-loose'>
                    <p>Double Access   </p>
                    <p>Self Learning System</p>
                    <p>Unlimited Overview</p>
                    <p>Up to 10 Areas of Interests</p>
                    <p>Course Completation Certificate</p>
                </div>
                <div>
                    <button className='pricing-btn'>Active Your Plan</button>
                </div>
            </div>
            <div className='pricing bg-rose-100 '>
                <h1 className='font-medium text-3xl text-violet-900 pt-4'>Premimum</h1>
                <p className='font-bold text-4xl text-violet-900 py-6'> <sup>$</sup>200<sub>/Mo</sub></p>
                <div className='pricing-feature pt-2  font-medium text-lg text-indigo-900 leading-loose'>
                    <p>Unlimited Access   </p>
                    <p>Self Learning System</p>
                    <p>Unlimited Overview</p>
                    <p>Up to 70 Areas of Interests</p>
                    <p>Course Completation Certificate</p>
                </div>
                <div>
                    <button className='pricing-btn'>Active Your Plan</button>
                </div>
            </div>
            
        </div>
    );
};

export default Pricing;
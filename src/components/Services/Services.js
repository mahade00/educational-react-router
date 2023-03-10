import React from 'react';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CodeIcon from '@mui/icons-material/Code';
import './Service.css';

const Services = () => {
    return (
        <div className='service-main'>
            <div className='service py-5'>
                <LaptopMacIcon className='service-icon'  sx={ {fontSize:50}}/>
                <h1 className='font-bold text-xl text-indigo-900'>Product Design</h1>
                <p className='text-lg text-indigo-700'>We design high quality product. Which helps you to extend your business.
                </p>
            </div>
            <div className='service py-5 mx-10'>
                <TipsAndUpdatesIcon className='service-icon'  sx={ {fontSize:50}}/>
                <h1 className='font-bold text-xl text-indigo-900'>Idea Generate</h1>
                <p className='text-lg text-indigo-700'>Our teams work to implement your idea from your desk to field.</p>
            </div>
            <div className='service py-5'>
                <CodeIcon className='service-icon' sx={ {fontSize:50}} />
                <h1 className='font-bold text-xl text-indigo-900'>Development</h1>
                <p className='text-lg text-indigo-700'>Developing Business App help you to grow your business.</p>
            </div>
        </div>
    );
};

export default Services;
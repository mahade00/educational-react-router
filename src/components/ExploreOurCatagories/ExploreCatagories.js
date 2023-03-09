import React from 'react';
import './ExploreCatagories.css';
import PaletteIcon from '@mui/icons-material/Palette';
import CampaignIcon from '@mui/icons-material/Campaign';
import TerminalIcon from '@mui/icons-material/Terminal';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const ExploreCatagories = () => {
    return (
        <div className='catagories-main' data-aos="fade-up" data-aos-duration="2000">
            <h1 className='font-sans  font-semibold text-4xl pt-3 '>Explore Our Catagories</h1>
            <div className='catagories pt-7'>

                <div className='courses'>
                    <p >< PaletteIcon className='material-icon' sx={ {fontSize:50}} /></p> 
                <h2 className='text-xl font-semibold'>UI/UX Design</h2>
                <p>2 Courses</p>
                </div>
                
                <div className='courses'>
                    <p><CampaignIcon  className='material-icon' sx={ {fontSize:50}}/></p>
                <h2 className='text-xl font-semibold'>Sales Marketing</h2>
                <p>3 Courses</p>
                </div>
                
                <div className='courses'>
                    <p><TerminalIcon className='material-icon' sx={ {fontSize:50}} /></p>
                <h2 className='text-xl font-semibold'>Development</h2>
                <p>8 Courses</p>
                </div>
                
                <div className='courses'>
                    <p><DatasetLinkedIcon className='material-icon' sx={ {fontSize:50}}/></p>
                <h2 className='text-xl font-semibold'>Data Science</h2>
                <p>9 Courses</p>
                </div>
                
                <div className='courses'>
                    <p><AddAPhotoIcon className='material-icon' sx={ {fontSize:50}}/></p>
                <h2 className='text-xl font-semibold'>Photography</h2>
                <p>5 Courses</p>
                </div>
                
                <div className='courses'>
                    <p><DesignServicesIcon className='material-icon' sx={ {fontSize:50}}/></p>
                <h2 className='text-xl font-semibold'>Art & Design</h2>
                <p>4 Courses</p>
            </div>
            </div>
      
        </div>
    );
};

export default ExploreCatagories;
import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import HeadBanner from '../HeadBanner/HeadBanner';

const Header = () => {
 
    return (
        <div>
            <div class="content">
                <a href='/home'>
                    <h2> EdTech</h2>
		<h2 >EdTech</h2>
                </a>
		
	</div>
            <div className='navs'>
                <NavLink className={'nav home-nav font-medium text-[#2c2370]'} to={'/home'} >Home</NavLink>  
                
                <NavLink className={'nav font-medium text-[#2c2370]' } to={'/courses'} >Courses</NavLink>  
                
                <NavLink className={'nav font-medium text-[#2c2370]'} to={'/pricing'}  >Pricing</NavLink>
                
                <NavLink className={'nav font-medium text-[#2c2370]' } to={'/services'}>Services</NavLink>
                
                <NavLink className={'nav font-medium text-[#2c2370]' } to={'/carrer'} >Carrer</NavLink>
                
                <NavLink className={'nav font-medium text-[#2c2370]' } to={'/contact'} >Contact</NavLink>
                
                <NavLink className={'nav about-nav font-medium text-[#2c2370]'} to={'/about'} >About</NavLink>

                
                <NavLink className={'log-n-sign-btn log-btn font-medium rounded-full '}>Login</NavLink>
                <NavLink className={'log-n-sign-btn font-medium rounded-full '}>Sign Up</NavLink>
                
                
             
                
                
            </div>
            
        </div>
    );
};

export default Header;
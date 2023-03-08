import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  
    return (
        <div>
            <div>
                <h1>This is Header</h1>
            </div>
            <div>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/courses'}>Courses</NavLink>                
                <NavLink
                    to="/pricing" 
                    style={({ isActive }) => ({ font: isActive ? 'bold' : 'noraml' })}>
                    Pricing</NavLink>
                <NavLink to={'/sercives'}>Services</NavLink>
                <NavLink to={'/carrer'}>Carrer</NavLink>
                
                
                
            </div>
            
        </div>
    );
};

export default Header;
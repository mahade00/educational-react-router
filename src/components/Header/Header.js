import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let navLinkStyle = ({isActive} )=> {
        isActive = {
           fontWeight: isActive ? 'bold' : 'normal' ,
            color: isActive ? 'red' : 'green',
            backgroundColor: isActive? 'black':'green' ,
        }
         
  }
    return (
        <div>
           
            <div>
                <NavLink to={'/home'} style={({isActive })=>        
          ({ font:isActive ? 'bold' : 'normal' ,
             color:isActive ? 'white' : 'green',
            backgroundColor:isActive? 'black':'white'})
        }>Home</NavLink>
                <NavLink to={'/courses'} style={{}}>Courses</NavLink>                
                <NavLink to='/pricing'  style={({isActive })=>        
          ({ font:isActive ? 'bold' : 'normal' ,
             color:isActive ? 'white' : 'green',
            backgroundColor:isActive? 'black':'white'})
        }>Pricing</NavLink>
                <NavLink to={'/services'} style={{}}>Services</NavLink>
                <NavLink to={'/carrer'} style={{}}>Carrer</NavLink>
                <NavLink to={'/contact'} style={{}}>Contact Us</NavLink>
                <NavLink to={'/about'} style={{}}>About</NavLink>
                
                
                
            </div>
            
        </div>
    );
};

export default Header;
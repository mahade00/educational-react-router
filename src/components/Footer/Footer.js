import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className='footer-main '>
            <div className='footer'>
                <div className='footer-each leading-loose'>
                    <h1 className='text-base font-bold text-[#2c2370]'>Social Media</h1>
                    <Link>< LinkedInIcon className='social-icon'/></Link>
                    <Link><FacebookIcon className='social-icon'/></Link>
                    <Link><InstagramIcon className='social-icon'/></Link>
                    <Link><TwitterIcon className='social-icon'/></Link>
                </div>
                <div className='footer-each leading-loose'>
                    <h1 className='text-base font-bold text-[#2c2370]'>Courses Catagory</h1>
                    <Link><p >Design</p></Link>
                    <Link><p>Development</p></Link>
                    <Link><p>Sales & Marketing</p></Link>
                    <Link><p>Data Science</p></Link>
                    <Link><p>Life Style</p></Link>
                    <Link><p>Photography</p></Link>
                </div>
                <div className='footer-each leading-loose'>
                    <h1 className='text-base font-bold text-[#2c2370]'>Resources</h1>
                    <Link><p>Learners</p></Link>
                   <Link><p>Instructors</p></Link>
                    <Link><p>My Account</p></Link>
                    <Link><p>Whishlist</p></Link>
                    <Link><p>Blog</p></Link>
                    <Link><p>Event</p></Link>
                </div>
                <div className='footer-each leading-loose'>
                    <h1 className='text-base font-bold text-[#2c2370]'>Quick Links</h1>
                    <Link><p>Courses</p></Link>
                    <Link><p>Shop</p></Link>
                    <Link><p>Testimonial</p></Link>
                    <Link><p>Carrer</p></Link>
                    <Link><p>Services</p></Link>
                </div>
                <div className='footer-each leading-loose'>
                    <h1 className='text-base font-bold text-[#2c2370]'>More</h1>
                    <Link><p>Support</p></Link>
                    <Link><p>Terms</p></Link>
                    <Link><p>Privacy</p></Link>
                    <Link><p>Help</p></Link>
                    <Link><p>FAQ</p></Link>
                   <Link> <p>Contact</p></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;
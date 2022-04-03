import { faBars, faCoffee, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [open , setopen] = useState(false)
    return (
        <div className='flex items-center justify-between  font-basic px-3 mx-auto py-11 '>
            <div>
               <h1 className='text-3xl text-themeColor font-bold'>Attar</h1>
              
            </div>

           <div>
          
            <ul className={`flex text-lg`}>
                <li className='pr-5 mx-7'><NavLink className={({ isActive })=> isActive ? 'active' : 'NoActive' } to={'/'}>Home</NavLink></li>
                <li className='pr-5 mx-7'><NavLink to={'/reviews'}>Reviews</NavLink></li>
                <li className='pr-5 mx-7'><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                <li className='pr-5 mx-7'><NavLink to={'/contact'}>Contact Us</NavLink></li>
            </ul>
           </div>
           <div>
               <button className='bg-themeColor text-white font-normal text-lg px-6 py-2 '><FontAwesomeIcon className='text-[17px] pr-0.5' icon={faPhone}/> Call Now</button>
           </div>
        </div>
    );
};

export default Header;
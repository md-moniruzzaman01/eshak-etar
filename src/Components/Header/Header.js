import { faBars, faCoffee, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [open,setopen] = useState(false)
    return (
        <div className='flex items-center justify-between  font-basic px-3 mx-auto py-11 '>
            <div>
               <h1 className='text-3xl text-themeColor font-bold'>Eshak</h1>
              
            </div>
            

           <div onClick={()=> setopen(!open)} className='lg:hidden '>
                {open? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
           
            </div>

             
            <ul className={`sm:static text-lg duration-500 ease-in-out  ${ open == true? 'top'  : 'nagitive-top'} `}>
                <li className='pr-2 mx-3'><NavLink className={({ isActive })=> isActive ? 'active' : 'NoActive' } to={'/'}>Home</NavLink></li>
                <li className='pr-2 mx-3'><NavLink to={'/reviews'}>Reviews</NavLink></li>
                <li className='pr-2 mx-3'><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                <li className='pr-2 mx-3'><NavLink to={'/blogs'}>Blogs</NavLink></li>
                <li className='pr-2 mx-3'><NavLink to={'/contact'}>Contact Us</NavLink></li>
            </ul>
            
           <div className='call-btn'>
               <button className='bg-themeColor text-white font-normal text-lg px-6 py-2 '><FontAwesomeIcon className='text-[17px] pr-0.5' icon={faPhone}/> Call Now</button>
           </div>
        </div>
    );
};

export default Header;
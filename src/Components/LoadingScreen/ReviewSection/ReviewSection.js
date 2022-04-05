import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const ReviewSection = ({Review}) => {
  const {body,company,email,name,picture,rating}= Review
    
    
    return (
        <div className='  w-full  p-2 '>
          <div className='border-2 relative py-7 px-5 h-72'>



          <div className='flex justify-end mb-3'> <h4 className='font-semibold '>{email}</h4></div>
            <p className='italic'>“{body}”</p>
            
            <div className='flex  absolute bottom-4'>
                <div>
                <p className='mb-3 text-gray-700'><FontAwesomeIcon className='text-amber-600' icon={faStar}/> {rating} stars   </p>
                
                <div className='flex'>
                    <div className='mr-5'><img className='w-14 rounded-full' src={picture} alt="" /></div>
                    <div >
                    <h3 className='font-heading font-normal text-textColor'>{name}</h3>
                    <p className='text-textColor font-basic font-normal '>Happy Customar</p>
                    </div>
                </div>
                </div>
                
                <div className='ml-14'>
                    <FontAwesomeIcon className='h-24 text-gray-400' icon={faQuoteRight}/>
                </div>
            </div>

          </div>
            
        </div>
    );
};

export default ReviewSection;
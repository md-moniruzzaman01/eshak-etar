import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleReviewBox = ({ Review }) => {
    const { body, company, email, name, picture, rating } = Review;
    return (
        <div className='flex  justify-center items-center my-5 '>
            <div className='flex items-center justify-center border-2 h-72 w-full px-1 lg:w-8/12 lg:h-64'>
                <div>
                    <img className='rounded-full' src={picture} alt="" />
                </div>
                <div className='w-10/12 ml-5 lg:w-8/12 lg:ml-11'>
                <div className='flex justify-end mb-3 text-gray-500'> <h4 className='font-semibold '>{email}</h4></div>
                    <p className='italic '>"{body}"</p>
                    <p className='my-3 text-gray-700'><FontAwesomeIcon className='text-amber-600' icon={faStar} /> {rating} stars   </p>
                    <div className='flex justify-end mr-1 mt-11 lg:mr-14'>
                        <div>
                            <h3 className='font-heading font-normal text-textColor'>{name}</h3>
                            <p className='text-textColor font-basic font-normal '>Happy Customar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReviewBox;
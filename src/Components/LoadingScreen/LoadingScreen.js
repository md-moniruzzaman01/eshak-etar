import React from 'react';
import loadingImg from '../../utilitis/image.png'

const LoadingScreen = () => {
    return (
        <div className='grid grid-cols-2 px-7 mx-auto  min-h-[70vh]'>
            <div className='space-y-8 mt-11'>
              
                <h1 className='text-6xl leading-tight font-heading font-normal  text-[#2d2d2d]'>
                You are unique,
                <span className='block'>
                so is your fragrance.
                </span>
                </h1>
                <p className='text-[#5D5D5D] leading-8'>
                A perfume is a very complex composition of top notes, heart notes and base notes. The top notes are the most delicate a nd do typically not last very long.
                </p>
                
                <div className='flex  pt-8'>
                    <button className='mr-8 px-11 text-white font-basic py-3 bg-themeColor'>Buy Now</button>
                    <button className='text-themeColor py-3 px-6  border-2 border-themeColor font-basic'>Expolre More</button>
                </div>
            </div>
            <div>
                <img className='w-[28rem]  mx-auto' src={loadingImg} alt="" />
            </div>
        </div>
    );
};

export default LoadingScreen;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import loadingImg from '../../utilitis/image.png'
import ReviewSection from './ReviewSection/ReviewSection';

const LoadingScreen = () => {
    const [Reviews,setReviews] = useReviews()
    const shortReviews = Reviews.slice(0,3);
    const navigate = useNavigate()
 
    return (
        <div>
            {/* loading section */}
            <div className='grid grid-cols-1 px-7 mx-auto mt-24  min-h-[70vh] lg:grid-cols-2'>
            <div className='space-y-8 mt-11 order-2 lg:order-1 '>
              
                <h1 className='text-4xl  leading-tight font-heading font-normal  text-[#2d2d2d] lg:text-6xl'>
                You are unique,
                <span className='block'>
                so is your fragrance.
                </span>
                </h1>
                <p className='text-[#5D5D5D] leading-8'>
                A perfume is a very complex composition of top notes, heart notes and base notes. The top notes are the most delicate a nd do typically not last very long.
                </p>
                
                <div className='flex justify-center py-8 lg:justify-start'>
                    <button className='mr-8 px-7 text-white font-basic py-2 bg-themeColor lg:px-11 lg:py-3 '>Buy Now</button>
                    <button className='text-themeColor py-2 px-4  border-2 border-themeColor font-basic lg:px-6 lg:py-3'>Expolre More</button>
                </div>
            </div>
            <div>
                <img className='w-5/6  mx-auto lg:w-[28rem] ' src={loadingImg} alt="" />
            </div>
        </div>
        {/* review section */}
        <div className='min-h-screen'>
        <h3 className='text-2xl mt-14 text-center font-basic font-semibold lg:text-4xl'>customer reviews ({shortReviews.length})</h3>
            <h2 className='text-xl mt-14 ml-4 font-heading  font-normal lg:text-2xl'>What Our Customar Saying?</h2>
        <div className='grid grid-cols-1  mt-14 md:grid-cols-2 lg:grid-cols-3 '>
            {
               shortReviews.map(review => <ReviewSection key={review._id} Review={review}></ReviewSection>) 
            }
        
        </div>


            <div className='flex justify-end mr-5 my-7'> <button onClick={()=> navigate('/reviews')} className='border-2 border-themeColor px-7 py-3 text-themeColor font-basic rounded-sm'>See All Reviews</button></div>

        </div>







        </div>
    );
};

export default LoadingScreen;
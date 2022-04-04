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
            <div className='grid grid-cols-2 px-7 mx-auto mt-24  min-h-[70vh]'>
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
        {/* review section */}
        <div className='min-h-screen'>
        <h3 className='text-4xl text-center font-basic font-semibold '>customer reviews ({shortReviews.length})</h3>
            <h2 className='text-3xl mt-14 font-heading  font-normal'>What Our Customar Saying?</h2>
        <div className='grid grid-cols-3 mt-14'>
            {
               shortReviews.map(review => <ReviewSection key={review._id} Review={review}></ReviewSection>) 
            }
        
        </div>


            <div className='flex justify-end mr-5 mt-7'> <button onClick={()=> navigate('/reviews')} className='border-2 border-themeColor px-7 py-3 text-themeColor font-basic rounded-sm'>See All Reviews</button></div>

        </div>







        </div>
    );
};

export default LoadingScreen;
import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewSection from '../LoadingScreen/ReviewSection/ReviewSection';
import SingleReviewBox from './SingleReviewBox';

const Reviews = () => {
    const [Reviews , setReviews] = useReviews()
    const [reviews,setreviews] =useReviews();
    
    return (
        <div className='min-h-screen'>
           {
               Reviews.map(review => <SingleReviewBox key={review._id} Review ={review}></SingleReviewBox>)
           }
            
        </div>
    );
};

export default Reviews;
import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewSection from '../LoadingScreen/ReviewSection/ReviewSection';
import SingleReviewBox from './SingleReviewBox';

const Reviews = () => {
    const [Reviews , setReviews] = useReviews()
    const [reviews,setreviews] =useReviews();
    console.log(reviews);
    return (
        <div>
           {
               Reviews.map(review => <ReviewSection key={review._id} Review ={review}></ReviewSection>)
           }
            
        </div>
    );
};

export default Reviews;
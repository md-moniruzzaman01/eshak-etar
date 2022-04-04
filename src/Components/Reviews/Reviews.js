import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReviewBox from './SingleReviewBox';

const Reviews = () => {
    const [reviews,setreviews] =useReviews();
    console.log(reviews);
    return (
        <div>
            <SingleReviewBox></SingleReviewBox>
            
        </div>
    );
};

export default Reviews;
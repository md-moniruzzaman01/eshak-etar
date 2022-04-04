import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';

const DetailsBlogPage = () => {
    const {idea}= useParams()
    const [blog,setBlog] = useState([])
useEffect(()=>{
    fetch('/blogs.json')
    .then(res => res.json())
    .then(data => setBlog(data))
},[])


const details = blog.find(blg=> blg.id == idea)
// const {id,img,body,title}= details 

    return (
        <div className='min-h-screen'>
         <div className='flex justify-center mb-11'>
             <img className='w-9/12  border-2 m-5  h-[600px]' src={details?.img} alt="" />
         </div>
         <div className='w-9/12 m-5 mx-auto mb-44'>
             <h1 className='text-3xl font-heading mb-11'>{details?.title}</h1>
             <p>{details?.body}</p>

         </div>
        </div>
    );
};

export default DetailsBlogPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleBlogCard = ({blogs}) => {

  const navitage = useNavigate()
    const Details =(id)=>{
        const path = `/blogs/${id}`;
        navitage(path)
        
    }

  const {id,img,title,body} =blogs
    return (
        <div >
         <div className="rounded overflow-hidden shadow-lg relative min-h-[510px] ">
      <img className="w-full" src={img} alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-11">
         {body.slice(0,200)}...
        </p>
      </div>
      <div className="px-6 pb-2 flex justify-end absolute bottom-1 right-0">
      <button onClick={()=>Details(id)} className='border-2 border-gray-700 px-5 py-1 text-gray-700'>Read more...</button>
      </div>
    </div>
        </div>
    );
};

export default SingleBlogCard;
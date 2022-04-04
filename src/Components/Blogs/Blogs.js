import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import SingleBlogCard from './SingleBlogCard';


const Blogs = () => {

    const [blogs,setblogs]=useBlogs()
    return (
        <div>
            <div className="p-10 min-h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    blogs.map(blog => <SingleBlogCard key ={blog.id} blogs ={blog}></SingleBlogCard>)
                }
    
        
       
    
   

        </div>
        </div>
    );
};

export default Blogs;
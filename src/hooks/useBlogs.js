import { useEffect, useState } from "react";


const useBlogs = () => {
  
    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    },[])

    return [blogs,setblogs]

};

export default useBlogs;
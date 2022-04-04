import React from 'react';

const About = () => {
    return (
        <div className='min-h-screen'>
            <h2 className='text-center text-3xl font-semibold mt-11 underline underline-offset-1'>contact</h2>
            <div className='flex justify-center '>
                <form className=' mt-11 bg-gray-100 w-9/12 p-5 rounded max-w-2xl'>
                    <div className='mb-5 '>
                    <label htmlFor="email">Email : </label>
                   <input  className='w-full px-5' type="email" name="" id="email" />
                    </div>
                  <div>
                  <label htmlFor="textarea">Commnents : </label>
                   <textarea className=' w-full px-5 py-3' name="" id="" cols="30" rows="10"></textarea>

                  </div>
                  <div className='flex justify-end mt-11'>
                      <button className='px-9 bg-themeColor  py-3 rounded text-white font-semibold'>Submit</button>
                  </div>
                </form>
            </div>
        </div>
    );
};  

export default About;
import React from 'react';

export default function Page() {
    return (
        <div className="flex flex-col items-center bg-[#f6f3fc] p-5">
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-3xl text-center mb-5'>Our Projects</h1>
                <p className='px-20 mx-60 text-center text-sm'>
                    A project is a single or team activity, combining research and design with the best effort. Here are some of our team's projects.
                </p>
            </div>
            <div className="flex gap-5 mt-5 bg-white p-5">
                <div>
                    <img src="/assets/images/6.projects/image1.png" className="object-cover mb-5" alt="Project 1" />
                    <img src="/assets/images/6.projects/image2.png" className="object-cover" alt="Project 2" />
                </div>
                <div> 
                    <img src="/assets/images/6.projects/image3.png" className="object-cover mb-5" alt="Project 3" />
                    <img src="/assets/images/6.projects/image4.png" className="object-cover" alt="Project 4" />
                </div>
                <div>
                    <img src="/assets/images/6.projects/image5.png" className="object-cover mb-5" alt="Project 5" />
                    <img src="/assets/images/6.projects/image6.png" className="object-cover" alt="Project 6" />
                </div>
            </div>
        </div>
    );
}

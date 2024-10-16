import React from 'react';

export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center bg-[#f6f3fc] p-5">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-semibold text-3xl text-center mb-5'>Our Team</h1>
                    <p className='px-20 mx-60 text-center text-sm'>
                       People from various origins, cultures, and personalities make up our team.<br/>
                       This blend makes it a powerful team.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className="flex gap-5 mt-5 p-5">
                        <div className='flex flex-col items-center justify-center'>
                            <img src="/assets/images/7..team/image1.png" alt="Jhon Adams" className="object-cover h-80" />
                            <h2 className='font-bold text-gray-500'>Jhon Adams</h2>
                            <p className='text-xs'>CEO</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src="/assets/images/7..team/image2.png" alt="Carrie Johnson" className="object-cover h-80" />
                            <h2 className='font-bold text-gray-500'>Carrie Johnson</h2>
                            <p className='text-xs'>Senior Developer</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src="/assets/images/7..team/image3.png" alt="Ray Marie" className="object-cover h-80" />
                            <h2 className='font-bold text-gray-500'>Ray Marie</h2>
                            <p className='text-xs'>Developer</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src="/assets/images/7..team/image4.png" alt="Austin Min" className="object-cover h-80" />
                            <h2 className='font-bold text-gray-500'>Austin Min</h2>
                            <p className='text-xs'>Designer</p>
                        </div>
                    </div>
                    <button className="mt-6 bg-transparent border-transparent text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-700 bg-clip-text border-2 border-gradient-to-r">
                       View Full Team
                    </button>
                </div>
            </div>
        </>
    );
}

import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6f3fc] px-4">
      <h1 className="mt-10 mb-6 text-3xl font-semibold text-gray-700">Contact Us</h1>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl items-start justify-between lg:px-16 gap-12">
        

        <div className="w-full lg:w-1/2 bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col gap-6 transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-50">
          <form className="flex flex-col gap-4">
            
  
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                placeholder="Write your name"
                type="text"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <input
                placeholder="Write your email"
                type="email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
              </svg>
              <textarea
                placeholder="Write your message"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            
            <button className="mt-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 hover:from-purple-700 hover:to-blue-700">
              Submit
            </button>
          </form>
        </div>
        
       
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {[ 
            { title: 'Phone', text: '+880124332334' },
            { title: 'Email', text: 'something@gmail.com' },
            { title: 'Location', text: '43/A Sponner Street, St Laurence, Virginia, Texas' }
          ].map((contact, index) => (
            <div key={index} className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-700"
              >

              </svg>
              <div>
                <h2 className="font-semibold">{contact.title}</h2>
                <p className="text-gray-600">{contact.text}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

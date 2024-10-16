import React from 'react';
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#f6f3fc]">
      <div className='flex gap-28 mt-10 justify-center'>
        <Image
          src="/assets/images/4.details/illustration3.png"
          alt="Descripción de la imagen"
          width={300}
          height={300}
        />
        <div className='flex flex-col items-center justify-center w-4/12'>
          <h1 className='font-bold text-2xl mb-5'>A Creative Team That Builds Stunning UI/UX</h1>
          <p className='text-xs text-center'>
            Today, Id like to show you some incredible sign-up screen app UI ideas and concepts that offer a modern user experience.<br />
            The most stunning, cutting-edge UI/UX.
            <br /><br /><br />
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong>.
          </p>
          <button className="mt-6 bg-transparent border-transparent text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-700 bg-clip-text border-2 border-gradient-to-r mr-56">
            Read More
          </button>
        </div>
      </div>

      <div className='flex gap-28 mt-10 justify-center'>
        <div className='flex flex-col items-center justify-center w-4/12'>
          <h1 className='font-bold text-2xl mb-5'>Devoted to Defining the Cutting Edge</h1>
          <p className='text-xs text-center'>
          &quot;This new creation is cutting-edge technology,&quot; says the researcher, &quot;whose study originates from a business at the forefront of space science.&quot;
            <br /><br /><br />
            Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong>.
          </p>
          <button className="mt-6 bg-transparent border-transparent text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-700 bg-clip-text border-2 border-gradient-to-r mr-56">
            Read More
          </button>
        </div>
        <Image
          src="/assets/images/4.details/illustration6.png"
          alt="Descripción de la imagen"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

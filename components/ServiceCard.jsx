import React from 'react';
import Image from "next/image";

export default function ServiceCard({ img, titulo, parrafo }) {
    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col gap-10 transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-50">
            <a href="#" className='flex items-center justify-center'>
                <Image
                    src={img}
                    alt="Descripción de la imagen"
                    width={100}
                    height={50}
                    className="object-contain h-20 w-20" 
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-600">
                        {titulo}
                    </h5>
                </a>
                <p className="font-normal text-gray-500 mb-6 sm:mb-8">
                    {parrafo}
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500 bg-none rounded-lg"
                >
                    Learn more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

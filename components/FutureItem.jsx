import React from 'react'
import Image from "next/image";
export default function FutureItem({img,titu,para}) {
    return (
        <>
            <div className="max-w-xs bg-none flex flex-col items-center justify-center mt-5">
                <a href="#">
                    <Image
                        src={img}
                        alt="Descripción de la imagen"
                        width={100}
                        height={126}
                    />
                </a>
                <div className="p-5 flex flex-col items-center justify-center">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-400">
                           {titu}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 text-center">
                       {para}
                    </p>
                    
                </div>
            </div>

        </>
    )
}

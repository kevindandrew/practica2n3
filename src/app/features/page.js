'use client';
import React from 'react'
import FutureItem from '../../../components/FutureItem';
export default function page() {
  return (
    <>
    <div className="flex flex-col items-center bg-[#f6f3fc] p-5">
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-3xl text-center mb-5'>Features</h1>
            <p className='px-20 mx-60 text-center text-sm'>
                We provide a number of excellent features that will undoubtedly improve the user experience. we also provide a better support system
            </p>
        </div>
        <div className='grid grid-cols-3'>
        <FutureItem 
        img={"/assets/images/5.features/icon1.png"} 
        titu={"Encripted Mail"} 
        para={"A process of encrypting email communications"
        }/>
        <FutureItem 
        img={"/assets/images/5.features/icon2.png"} 
        titu={"Display Sharing"} 
        para={"With other participants, you may share your screen"
        }/>
        <FutureItem 
        img={"/assets/images/5.features/icon3.png"} 
        titu={"Private Notebook"} 
        para={"Private Notebook is an application that is protected"
        }/>
        <FutureItem 
        img={"/assets/images/5.features/icon4.png"} 
        titu={"App App Assistance"} 
        para={"App App Assistance is quickly and effectively ran the system"
        }/>
        <FutureItem 
        img={"/assets/images/5.features/icon5.png"} 
        titu={"Multiple Printing"} 
        para={"Our canvas prints are crafted on top-notch canvas."
        }/>
        <FutureItem 
        img={"/assets/images/5.features/icon6.png"} 
        titu={"Free Sketch"} 
        para={"Our canvas prints are crafted on top-notch canvas."
        }/>
        </div>
       
      </div>
    </>
  )
}

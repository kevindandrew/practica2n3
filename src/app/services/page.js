'use client';
import React from 'react';
import ServiceCard from '../../../components/ServiceCard';

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-[#f6f3fc] px-4">
      <h1 className='mt-5 font-semibold text-3xl text-gray-800 text-center'>Service</h1>
      <p className='text-center mb-11 max-w-xl'>
        We offer youth chances for career development in their practice. We also <br />
        support a wide range of services to ensure client satisfaction.
      </p>
      <div className='flex flex-wrap justify-center gap-5'>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <ServiceCard
            img={"/assets/images/3.services/icon1.png"}
            title={"Send Texts Instantly"}
            description={"Financial planning, forecasting, and adjusting rapidly with customer demands and budgets."} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <ServiceCard
            img={"/assets/images/3.services/icon2.png"}
            title={"Better Organized"}
            description={"Latest technology and experienced guidance, trainer HR specialists to keep updated."} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <ServiceCard
            img={"/assets/images/3.services/icon3.png"}
            title={"Analytical Statistics"}
            description={"Messages, real-time reminders, memos, and many more will keep your team in sync."} />
        </div>
      </div>
    </div>
  );
}

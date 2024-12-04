import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import CustomButton from './CustomButton';

const chooseUsData = [
  { title: 'Proven Expertise', text: '20+ business growth and digital marketing team, working with small to medium-sized businesses.' },
  { title: 'Data-Driven Strategies', text: 'We analyze key industry trends and your business’s unique needs to create strategies that work.' },
  { title: 'Commitment to Result & Innovation', text: 'Our goal is to provide value in every session, leaving you with ideas you can implement immediately.' },
  { title: '100% Cost Effective 30-Minute Call', text: 'This session is completely free, with no hidden costs, tailored to your business needs.' },
];

const BookUsChooseUs = () => {
  return (
    <>
      <div className='pt-10 md:pt-20 font-poppins'>
        <h1 className='flex justify-center items-center text-3xl md:text-5xl text-blue-800 font-bold text-center'>
          WHY CHOOSE <span className='mx-3 text-red-600'><AiFillHeart /></span> US?
        </h1>
      </div>
      <section className="font-poppins bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container max-w-3xl md:max-w-5xl px-4 py-10 md:py-12 mx-auto">
          <div className="grid gap-4 mx-2 md:mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-6 md:mb-10 before:block before:w-20 before:h-2 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-yellow-500">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-300">Your Growth is Our Mission</h3>
                <span className="text-xs md:text-sm font-bold uppercase text-red-600 dark:text-yellow-500">Experience excellence</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 md:space-y-8 sm:col-span-9">
              <div className="relative px-2 md:px-4 space-y-8 md:space-y-10 before:absolute before:top-3 before:bottom-0 before:w-0.5 before:left-[-15px] md:before:left-[-15px] before:bg-blue-500">
                {chooseUsData.map((item, index) => (
                  <div key={index} className="flex flex-col relative before:absolute before:top-2 before:w-3 before:h-3 md:before:w-4 md:before:h-4 before:rounded-full before:left-[-28px] md:before:left-[-38px] before:bg-yellow-500">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-700 dark:text-yellow-400">{item.title}</h3>
                    <p className="mt-1 md:mt-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-10">
          <CustomButton
            text="Grow Your Business – Book Now"
            href="https://ankitbiswas0403.myinstamojo.com/checkout/v2/customer-info"
            className="px-4 py-2 md:px-6 md:py-3 text-yellow-400 bg-black shadow-lg shadow-blue-500 rounded-xl hover:shadow-yellow-500"
          />
        </div>
      </section>
    </>
  );
};

export default BookUsChooseUs;

import React from 'react'

const GetOurSlot = () => {
  return (
    <>
      <div className="sm:mx-60 mx-4">
        <div className="p-6 py-10 dark:bg-violet-600 dark:text-gray-50">
          <div className="container mx-auto">
            <div className="sm:flex sm:gap-12 lg:flex-row items-center justify-center ">
              <h2 className="text-center sm:text-5xl text-2xl font-bold">
                100% Cost Effective
              </h2>
              <a href="https://ankitbiswas0403.myinstamojo.com/checkout/v2/customer-info" 
              target="_blank" 
              rel="noopener noreferrer">
                <button className="sm:px-20 px-4 py-4 font-semibold text-yellow-400 text-sm sm:text-lg bg-black/80 rounded-xl shadow-lg shadow-blue-500 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.4),0_0_30px_15px_rgba(255,223,0,0.2)] focus:outline-none focus:ring-2 focus:ring-yellow-400">
                Secure My  Consultation Slot
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetOurSlot

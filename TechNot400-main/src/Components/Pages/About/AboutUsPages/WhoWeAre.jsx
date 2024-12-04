import React from 'react'
import team_img from '../../../../images/Team/team1.png'

const WhoWeAre = () => {
  return (
    <div className='max-w-screen overflow-x-hidden overflow-y-hidden font-poppins pt-20 bg-blue-100/70'>
        <h1 className='sm:text-[60px] text-3xl text-center sm:mt-20 mt-12 font-extrabold'>Who we Are <span className='text-blue-400/80'>?</span> and <span className='text-yellow-600'>what's our initiatives?</span></h1>
        <div className='sm:flex sm:mx-80 mx-4 gap-40 sm:py-20'>
            <img src={team_img} alt="Web Developement In Assam" className='sm:w-[100px] w-screen h-[300px] flex-1 rounded-3xl mt-16'/>
              <p className='flex-1 sm:text-xl text-lg text-center sm:text-left font-sans font-semibold mt-12 sm:mt-0 mb-16 sm:mb-0'><span className='text-[40px] text-yellow-600'>"</span> We are a team of result-driven professionals dedicated to transforming your ideas into impactful digital experiences. With expertise in <span className='font-bold text-yellow-600'>web development and digital marketing</span>, we focus on delivering solutions that elevate small to large businesses achieve measurable success. Let us help you create engaging experiences that resonate with your audience and drive your business forward. <span className='text-[40px] text-yellow-600'>"</span>
              </p>
        </div>
    </div>
  )
}

export default WhoWeAre
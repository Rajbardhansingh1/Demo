import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

const GetInTouch = () => {
  return (
    <section className="py-20 overflow-x-hidden overflow-y-hidden font-poppins dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-7xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x justify-center items-center">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="sm:text-[65px] text-[40px] font-bold text-yellow-600">Get in touch</h1>
			<p className="pt-2 sm:font-bold font-semibold">Still having any doubts?</p>
			<p className="pt-2 pb-12 sm:font-bold font-semibold">Come on we'll have a discussion</p>
			<button className='flex items-center gap-4 border-2 border-none bg-yellow-600 px-6 py-3 rounded-xl'>
				<h2>Tell Us Here</h2>
				<FaArrowDown/>
			</button>
		</div>
		<div>
			<img src="https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-4751.jpg?uid=R110283474&ga=GA1.1.635748622.1705062641&semt=ais_hybrid" alt="" />
		</div>
	</div>
</section>
  )
}

export default GetInTouch
import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PriceCard = ({standOutBg, marginMiddle,Package, Price, image, Feature1, Feature2, Feature3, Feature4, Feature5, Feature6, iconColor1, iconColor2, iconColor3, iconColor4, iconColor5, iconColor6,buttonBg, hoverBgButton, ButtonTextColor}) => {
  return (
    <div className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300 bg-white`}>
        <img src={image} alt="image1" className='w-20 mx-auto mt-[-4rem] mb-4 bg-white rounded-md'/>
        <h2 className='text-2xl font-bold text-center'>{Package} Package</h2>
        <p className='py-2 mb-6 mx-8 flex justify-center text-2xl font-semibold'>{Price}</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 flex justify-between'>{Feature1}<BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor1}`}/></p>
            <p className='py-2 border-b mx-8 flex justify-between'>{Feature2}<BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor2}`}/></p>
            <p className='py-2 border-b mx-8 flex justify-between'>{Feature3}<BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor3}`}/></p>
            <p className='py-2 border-b mx-8 flex justify-between'>{Feature4}<BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor4}`}/></p>
            <p className='py-2 border-b mx-8 flex justify-between'>{Feature5}<BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor5}`}/></p>
            <p className='py-2 mx-8 flex justify-between'>{Feature6}<BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor6}`}/></p>
        </div>
        <Link to='/contact'>
        <button className={`flex justify-center mx-auto w-[200px] ${buttonBg} ${hoverBgButton} ${ButtonTextColor} rounded-md font-medium my-6 py-3`}>
            Contact Support
        </button>
        </Link>
    </div>
  )
}

export default PriceCard
import React from 'react'
import Nav from './Nav'
import FeaturedCompany from "/src/assets/image/HeaderImg/FeaturedCompany.png"


const Header = () => {
  return (
    <div>
        <Nav/>
        <div className="comp gap-8 flex flex-col px-32 w-full pt-12 pb-12 pr-28 pl-28">
          <p className='coom text-base font-Epilogue text-customSer text-start'>Companies we helped grow</p>
          <img src={FeaturedCompany} alt="" />
        </div>
    </div>
  )
} 

export default Header

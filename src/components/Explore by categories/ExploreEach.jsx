import React from 'react'

const ExploreEach = ({img,h3,p,arr}) => {
  return (
    <div className='group border hover:bg-customJb hover:text-white  gr gap-8 text-customeWhitee flex flex-col p-8 border-custombord'>
        <img className='imm group-hover:filter group-hover:invert group-hover:brightness-0 w-9 h-9 lg:w-12 lg:h-12 big:w-10 big:h-10 ' src={img} alt="" />
        <h3 className='h30 text-2xl font-semibold font-Epilogue  text-start'>{h3}</h3>
        <div className='imgp  gap-4 flex'>
            <p className='custom-p font-Epilogue group-hover:filter  group-hover:invert group-hover:brightness-0 text-customSer text-1.125rem text-start'>{p}</p>
            <img className='arr group-hover:filter  group-hover:invert group-hover:brightness-0 w-4 h-4 lg:w-6 lg:h-6 big:w-5 big:h-5' src={arr} alt="" />
        </div>
    </div>
  )
}

export default ExploreEach
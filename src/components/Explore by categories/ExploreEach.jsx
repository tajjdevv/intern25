import React from 'react'

const ExploreEach = ({img,h3,p,arr}) => {
  return (
    <div className='group border hover:bg-customJb hover:text-white  gr gap-8 text-customeWhitee flex flex-col p-8 border-custombord'>
        <img className='imm group-hover:filter group-hover:invert group-hover:brightness-0 w-12 h-12 ' src={img} alt="" />
        <h3 className='h30 text-2xl font-semibold font-Epilogue  text-start'>{h3}</h3>
        <div className='imgp  gap-4 flex'>
            <p className='custom-p font-Epilogue group-hover:filter  group-hover:invert group-hover:brightness-0 text-customSer text-1.125rem text-start'>{p}</p>
            <img className='arr group-hover:filter  group-hover:invert group-hover:brightness-0 w-100' src={arr} alt="" />
        </div>
    </div>
  )
}

export default ExploreEach
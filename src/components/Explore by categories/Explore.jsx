import React from 'react'
import one from "/src/assets/image/ExplorreImg/Icon1.png"
import two from "/src/assets/image/ExplorreImg/Icon2.png"
import three from "/src/assets/image/ExplorreImg/Icon3.png"
import four from "/src/assets/image/ExplorreImg/Icon4.png"
import five from "/src/assets/image/ExplorreImg/Icon5.png"
import six from "/src/assets/image/ExplorreImg/Icon6.png"
import seven from "/src/assets/image/ExplorreImg/Icon7.png"
import eight from "/src/assets/image/ExplorreImg/Icon8.png"
import nine from "/src/assets/image/ExplorreImg/Icon9.png"
import arv from "/src/assets/image/ExplorreImg/arr.png"
import ten from "/src/assets/image/ExplorreImg/Icon.png"
import image from "/src/assets/image/ExplorreImg/DashboardCompany.png"
import ExploreEach from './ExploreEach'

const Explore = () => {

    const each = [
        {
            image:two,
            h3:"Design",
            p:"235 jobs available",
            img:ten

        },{
            image:three,
            h3:"Sales",
            p:"756 jobs available",
            img:ten
        },
        {
            image:four,
            h3:"Marketing",
            p:"140 jobs available",
            img:ten
        },
        {
            image:five,
            h3:"Finance",
            p:"325 jobs available",
            img:ten
        },
        {
            image:six,
            h3:"Technology",
            p:"436 jobs available",
            img:ten
        },
        {
            image:seven,
            h3:"Engineering",
            p:"542 jobs available",
            img:ten
        },
        {
            image:eight,
            h3:"Business",
            p:"211 jobs available",
            img:ten
        },
        {
            image:nine,
            h3:"Human Resource",
            p:"346 jobs available",
            img:ten
        }
    ]

  return (
    <>
         <div className='explorea w-full  flex gap-12 flex-col justify-center  px-32'>   
                <div className="exx flex justify-between ">
                    <p className='expl text-5xl text-start font-semibold'>Explore by <span className="cat text-customlightBlue">category</span> </p>
                    <a href="#" className='avr flex gap-4 text-customeBlue'>Show all job <img src={arv} className='inv w-6 h-6' alt="" /></a>
                </div>
                
                <div className="contain md:grid-cols-4 lg:grid-cols-3  gap-8 grid grid-cols-2 pap-4">
            {
                each.map((data,index)=>{
                    return <ExploreEach key={index} img={data.image} h3={data.h3} p={data.p} arr={data.img}  />
                })
            }
  
                </div>
                <div className="start pt-20 flex justify-between pl-20 pr-20 mt-20 mb-20 bg-cover bg- bg-no-repeat w-full h-100vh bg-[url('/src/assets/image/ExplorreImg/Rectangle2742.png')]">
                    <div className="textt gap-6 flex flex-col w-customew">
                        <h3 className='post text-5xl text-start font-semibold text-white font-Epilogue '>Start posting jobs today</h3>
                        <p className="only text-base text-white text-start">Start posting jobs for only $10.</p>
                    </div>
                    <img className='win w-full h-auto' src={image} alt="" />
                </div>
        </div>
    </>
  )
}

export default Explore
import React from 'react'
import Logo from "/src/assets/image/HeaderImg/Logo.png"
import HeaderPic from "/src/assets/image/HeaderImg/headerPic.png"
import bg from "/src/assets/image/HeaderImg/PatternBg.png"
import design from "/src/assets/image/HeaderImg/design.png"
import search from "/src/assets/image/HeaderImg/Search.png"
import Location from "/src/assets/image/HeaderImg/Location.png"
import Pattern from "/src/assets/image/HeaderImg/Stroke.png"

const Nav = () => {
    return (
        <div className='vim bg-customeBg bg-fixed bg-right bg-no-repeat px-32 bg-[url("/src/assets/image/HeaderImg/PatternBg.png")] bg-contain'>
        <div className='headerOne w-full flex justify-between justify-self-center bg-[url()]'> 
            <div className="one gap-12 flex  items-center">
                <img className='w-[10rem]  h-[2.25rem] ' src={Logo} alt="" />
                <div className="link flex gap-6">
                    <a className='hLink text-base font-Epilogue font-medium py-6 text-customeWhite' href="#">Find
                        Jobs</a>
                    <a className='hLink 
                    text-base font-Epilogue font-medium py-6  text-customeWhite'
                        href="#">Browse</a>
                    <a className='hLink font-Epilogue text-base font-medium py-6  text-customeWhite' href="#">Companies
                    </a>
                </div>

            </div>
            <div className="two gap-2.5 flex items-center">
            <a className='hLink 
                text-base font-Epilogue font-medium pt-3 pb-3 pl-6 pr-6 text-customeBlue' href="#">Login
            </a>
            <hr className='hr ' />
            <a className='hLink 
    text-base font-medium font-Epilogue pt-3 pb-3 pl-6 pr-6 bg-customeBlue text-white' href="#">Sing Up
</a>
            </div>
        </div>
        <div className="headerTwo flex justify-between ">
            <div className="onee flex flex-col justify-center font-semibold">
                <div className="first w-customWidth">
                    <h3 className='disc text-customeWhitee  text-customSize/customeLine text-start'>
                        Discover more than <span className='sp text-customlightBlue'>5000+ Jobs</span>
                    </h3>
                    <img className='de pt-3 ' src={design} alt="" />
                    <p className='gr text-start font-Epilogue pt-3 pb-3'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                </div>
                <div className="search relativ shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] justify-between  gap-5 flex flex-col md:flex-row p-4 bg-white" >
                    <div className="ser items-center pl-4 pr-4 flex">
                        <img  className='ser w-4 h-4 ' src={search} alt="" />
                        <input  placeholder='Job  title or keyword' className='sear font-Epilogue outline-none text-customSer text-base pl-2 w-43 border-b-2 border-rgba(124, 132, 147, 1)' type="search" name="" id="" />
                    </div>
                    <div className="loca items-center flex">
                        <img className='loc w-4 h-4 ' src={Location} alt="" />
                        <select  className='sel font-Epilogue border-b-2 border-rgba(124, 132, 147, 1) pr-12 text-customeWhitee pl-2  flex' name="gender" id="gender">
                            <option  className='val text-base ' value="">Florence, Italy</option>
                            <option value="">miami, Italy</option>
                        </select>
                    </div>
                    <div className="patt">
                        <p className="jb font-Epilogue w-customjb text-white bg-customJb pt-3.5 pr-7 pl-7 pb-3.5 " bg-> Search my job</p>
                    </div>
                </div>
                <p className='pop pt-7 text-customPop text-base font-Epilogue text-start'>Popular : UI Designer, UX Researcher, Android, Admin</p>
            </div>



            <div className="twoo">
                <img src={HeaderPic} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Nav
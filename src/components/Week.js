import React from 'react'
import current from '../Assets/current.png'
import arrow from '../Assets/arrow.png'
import arrow1 from '../Assets/arrow1.png'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Week = () => {
  return (
    <div className="p-5  bg-[#FFFFF4] min-h-screen pt-11">
      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center gap-6">
        {/* Left side image */}

        {/* Right side text/cards */}
        <div className="grid grid-rows-2 gap-3 w-full h-72 sm:pl-11 pl-0">
          <div className="bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_black] flex items-center justify-center ">
         <div className='grid grid-cols-3 place-items-center '>
            <div className='col-span-2 text-start pl-9 font-anton text-xl'>Got an idea?<br/>Let’s shape it, refine it, and turn it into brilliance together.</div>
            <div><Link to='/contact'><img src={arrow1} alt="arrow1" className='h-24 w-24'/></Link></div>

         </div>
          </div>
<Link to='/contact'>
<p className="font-anton text-[#FF914D] text-[clamp(4.5rem,7vw,6rem)] leading-none flex flex-row items-center gap-5 justify-center sm:justify-start pt-5 left-0">
  <p text-center pt-5>Lets Talk</p><img src={arrow} alt="arrow"  className='h-16 w-16 '/>
</p></Link>
        </div>
                <div>
          <img src={current} alt="current week" className="w-full sm:h-72 h-60" />
        </div>

      </div>
      <Cards/>
    </div>
  )
}

export default Week

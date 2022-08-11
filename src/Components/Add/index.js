import React from 'react'
import adimg from '../../Assets/Adimg.jpg'
import { BiBed,BiBath,BiArea } from "react-icons/bi";




const Ads = (props) => {
  return (
    
    <div className='w-[35vh] h-fit bg-transparent pt-5 pl-5 pb-10 border-2 border-[black] md:w-[32vh] pb-5 pt-2 pl-2 ' >
        <div className='w-[30vh] h-[35vh] bg-[pink] rounded-tl-3xl rounded-br-3xl  ' >
            <img src={adimg} alt="" className='w-[30vh] h-[35vh] rounded-tl-3xl rounded-br-3xl ' />

        </div>
        <div className='flex pt-5' >
            <p className='w-fit bg-[green] p-2 rounded-full ' >House</p>
            <p className='bg-[purple] p-2 rounded-full ml-2' >Canada</p>
            </div> 
            <div className='pt-3 font-bold' >
                <p>{props.address}</p>
            </div>
            
            <div className=' flex relative pt-5' >
                <div className='static pr-2' >
                <BiBed size={20} /><span>5</span>
                </div>
                <div className='static pr-2' >
                <BiBath size={20} /><span>5</span>
                </div>
                <div className='static pl-2'  >
                              <BiArea size={20} /><span>3200 sq ft</span>
                </div>
            
            </div>
            <div className='pt-5' >
                <p>$ 140000</p>
            </div>

    </div>
    
  )
}

export default Ads
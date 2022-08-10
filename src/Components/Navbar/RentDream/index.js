import React from 'react'
import img from '../../../Assets/house-banner.png'
const Rent = () => {
  return (
    <div className='grid grid-cols-12 pt-20 pl-40' >
        <div className='col-span-8' >
            <div className='text-6xl font-bold' >
                <p><span className='text-[purple]' >Rent</span> Your Dream</p>
                <p>House With Us.</p>
            </div>
            <div className='pt-7' >
                <p>Powerful self serve product and growth analytics to help</p>
                <p>you convert engage and retain more.</p>
            </div>

        </div>
        <div className='col-span-4  ' >
            <img src={img} alt="HomeImage" className='rounded-tl-3xl h-[60vh] w-[70vh]	  ' />

        </div>
    </div>
  )
}

export default Rent
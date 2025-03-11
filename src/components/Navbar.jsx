import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar bg-purple-900 text-white flex justify-between px-3  md:justify-around py-2 '>

      <div className="logo">
        <span className='font-bold text-xl'>iTask</span>
      </div>
      <ul className='flex gap-6 '>
        <li className='cursor-pointer hover:font-semibold transition-all '>Home </li>
        <li className='cursor-pointer hover:font-semibold transition-all '>Your Tasks</li>      
      </ul>



    </div>
  )
}

export default Navbar

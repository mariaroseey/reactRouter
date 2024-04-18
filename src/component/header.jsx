import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div className='flex flex-row-reverse space-x-4 space-x-reverse gap-4 p-5 bg-blue-950 text-white'>
        
      <Link to = {'/about'} className='hover:text-lime-400'> About </Link>
      <Link to = {'/contact'} className='hover:text-lime-400'> Contact </Link>
      <Link to = {'/'} className='hover:text-lime-400'> Home </Link>
    </div>
  )
}

export default header

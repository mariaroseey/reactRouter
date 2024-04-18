import React from 'react'
import Header from '../component/header'

const home = () => {
   return(
    <div className='bg-black h-[100vh]'>
      <Header />
      <div className='pt-20 text-5xl text-white flex flex-col items-center justify-center'>
      <p className='font-bold'> TULIPS</p>
        <img className=' pt-10 rounded w-[500px] h-[300px] ' src="https://media.istockphoto.com/id/1449596497/photo/tulips-banner-with-sky.webp?b=1&s=170667a&w=0&k=20&c=gAKdOjZDVVXkFCKAFt-lH4O6qyDuPkL2yqolqq1RczU="/>
      
      </div>
    </div>
   )
  
}

export default home

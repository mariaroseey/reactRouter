import React from 'react'
import Header from '../component/header'

const about = () => {
  return (
    <div className='bg-black h-[100vh]'>
    <Header />
    <div className='pt-20 text-5xl text-white text-center '>
        <p> About Page</p>
        <div className='flex flex-row'>
        <img className='ml-10 w-[300px] h-[400px]' src="https://images.unsplash.com/photo-1624696503378-069979d46b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVsaXB8ZW58MHx8MHx8fDA%3D"/>
        <p className='text-sm pt-20 w-[500px]'> Tulips are perennial bulbous plants belonging to the genus Tulipa, which is part of the lily family, Liliaceae. They are known for their brightly colored, cup-shaped flowers and long, slender stems. Tulips come in a wide range of colors, including red, yellow, pink, purple, white, and orange, with various patterns and markings.</p>
        </div>
    </div>
</div>
  )
}

export default about

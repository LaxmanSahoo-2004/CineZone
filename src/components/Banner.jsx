import React from 'react'

function Banner() {
  return (
    <div className='md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage :`url(https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/The-Best-New-Movies-on-Netflix-in-August.jpg)`}}>
      <div className='text-white text-xl bg-gray-900/60 text-center w-full p-4'>Netflix movies and series</div>
    </div>
  )
}

export default Banner

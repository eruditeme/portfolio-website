import React from 'react'
import './header.css'
import fi from "../../assets/fi.png"


const Header = () => {
  return (
	<section className='about'>
		<div className='lg:grid lg:grid-cols-3'>
			<hr className="col-span-2 horizontal-line mt-10"/>
			<div className='z-10 absolute top-1/2 col-span-2 anton-regular xs:text-5xl xs:mt-2 xs:ml-4 sm:mt-3 sm:text-6xl md:text-7xl md:mt-4 md: ml-4 lg:mt-8 lg:ml-20 lg:text-8xl xl:text-9xl'>
				portfolio ver. 02
				<div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm lg:mt-3 right-2 absolute font-thin tracking-wider'>
					Evangeline Lam
				</div>
			</div>
			<img className='absolute right-8 z-0 bottom-0 xs:h-2/5 sm:h-1/2 md:h-3/4 lg:h-4/5' src={fi} alt='fibonacci sequence'/>
			<div className='col-span-1 justify-center flex'>
				<div className='z-10 absolute xs:right-8 lg:right-20 xs:top-3/4 lg:top-2/3 xs:text-5xl lg:text-8xl flex flex-col anton-regular'>
					<span className='font-semibold'>蓝</span>
					<span className='font-semibold'>伊</span>
					<span className='font-semibold'>沁</span> 
				</div>
			</div>
		</div>
	</section>
  )
}

export default Header
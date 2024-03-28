import React from 'react'
import './header.css'
import ama from "../../assets/ama.jpeg"


const Header = () => {
  return (
	<section className='about'>
		<div className='lg:grid lg:grid-cols-3'>
			<hr className="col-span-2 horizontal-line mt-10"/>
			<div className='absolute top-1/2 col-span-2 anton-regular xs:text-5xl xs:mt-2 xs:ml-4 sm:mt-3 sm:text-6xl md:text-7xl md:mt-4 md: ml-4 lg:mt-8 lg:ml-20 lg:text-8xl xl:text-9xl'>
				portfolio ver. 02
				<div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm lg:mt-3 right-2 absolute font-thin tracking-wider'>
					Evangeline Lam
				</div>
			</div>
			<div className='col-span-1 justify-center flex items-center'>
				<div className='z-10 absolute right-20 top-2/3 text-8xl flex flex-col font-extrabold anton-regular'>
					<span>蓝</span>
					<span>伊</span>
					<span>心</span>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Header
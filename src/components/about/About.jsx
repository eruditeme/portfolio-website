import React from 'react'
import './about.css'



const About = () => {
  return (
	<section className='about'>
		<div className="hazard-background mt-32"></div>
		<div className='lg:grid lg:grid-cols-3'>
			<div className='col-span-2'>
				<div className='anton-regular lg:text-5xl m-20'>
					About me
				</div>
				<div className='m-20'>
					<div className='arimo-uniquifier'>
						Hey, I'm Evangeline, a fourth year UofT student doing a double major in Computer Science and 
					Geographical Information Systems, as well as a minor in Economics. 
					</div>
					<div>

						<p>Here are a few technologies that I have been working with:</p>
						<ul>
							<li>Python</li>
							<li>SQL</li>
							<li>Next.js</li>
							<li>Assembly</li>
							<li>React</li>
							<li>Go</li>
						</ul>
					</div>
					<div>
						Outside of work and academics, I enjoy creating digital art,
						playing video games, and learning new languages. 
					</div>
				</div>
			</div>
			<div className='col-span-1'>
				<div className='lg:scale-125 flex justify-center mt-96'>
					<button class="button">
						<div class="lid">
							<span class="side top"></span>
							<span class="side front"></span>
							<span class="side back"> </span>
							<span class="side left"></span>
							<span class="side right"></span>
						</div>
						<div class="panels">
							<div class="panel-1">
							<div class="panel-2">
								<div class="btn-trigger">
								<span class="btn-trigger-1"></span>
								<span class="btn-trigger-2"></span>
								</div>
							</div>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	</section>
  )
}

export default About
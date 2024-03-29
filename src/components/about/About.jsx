import React from 'react'
import './about.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

export function Cherry(props) {
	const { nodes, materials } = useGLTF('/cherry_blossom.glb')
	return (
	  <group {...props} dispose={null}>
		<group scale={0.01}>
		  <mesh geometry={nodes.cherry_blossom_cherry_blossom_0.geometry} material={materials.cherry_blossom} rotation={[-Math.PI / 2, 0, 0]} />
		</group>
	  </group>
	)
}

const About = () => {
  return (
	<section className='about'>
		<div className='lg:mt-32 lg:mb-8'><div id="scissors"></div></div>
		<div className='lg:grid lg:grid-cols-6'>
			<div className='col-span-3'>
				<div className='lg:text-4xl ml-20 arimo-uniquifier font-extrabold'>
					About me
				</div>
				<div className='ml-20 mt-8'>
					<div className='text-md'>
						<p className='arimo-uniquifier font-semibold'>
							Hey, I'm Evangeline, a fourth year UofT student doing a double major in Computer Science and 
							Geographical Information Systems, as well as a minor in Economics. 
						</p>
						<br/>
						<p className='arimo-uniquifier font-bold'>Here are a few technologies that I have been working with:</p>
						<ul className='arimo-uniquifier font-bold'>
							<li className='font-semibold'>Python</li>
							<li className='font-semibold'>SQL</li>
							<li className='font-semibold'>Next.js</li>
							<li className='font-semibold'>Assembly</li>
							<li className='font-semibold'>React</li>
							<li className='font-semibold'>Go</li>
						</ul>
						<br/>
						<p className='arimo-uniquifier font-semibold'>
							Outside of work and academics, I enjoy creating digital art,
							playing video games, and learning new languages. 
						</p>
					</div>
				</div>
			</div>
			<div className='h-screen col-span-3 flex justify-center items-end ml-20'>
				<Canvas camera={{ fov: 32, position: [-4, 3, 38] }}>
				<ambientLight intensity={2.4} />
					<OrbitControls className='autoRotate' enableZoom={false} />
					<Cherry scale={4}/>
				</Canvas>
			</div>
		</div>
	</section>
  )
}

export default About
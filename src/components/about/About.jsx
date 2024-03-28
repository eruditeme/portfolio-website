import React from 'react'
import './about.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function Model(props) {
	const { nodes, materials } = useGLTF('/ice_cream_soda.glb')
	return (
	  <group {...props} dispose={null}>
		<group scale={0.01}>
		  <mesh geometry={nodes.Glass_Glass_0.geometry} material={materials.Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
		  <mesh geometry={nodes.Soda_Soda_0.geometry} material={materials.Soda} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
		  <mesh geometry={nodes.IceCream_IceCreamVanilla_0.geometry} material={materials['IceCream.Vanilla']} position={[-2.344, 322.816, 1.269]} rotation={[-1.468, 0.084, 2.454]} scale={53.393} />
		  <mesh geometry={nodes.Cherry_Cherry_0.geometry} material={materials.Cherry} position={[44.337, 325.215, -32.749]} rotation={[-2.15, -0.268, -0.533]} scale={84.972} />
		  <mesh geometry={nodes.Straw_Straw_0.geometry} material={materials.Straw} position={[-9.462, 68.945, 5.619]} rotation={[-1.509, 0.24, -1.886]} scale={100} />
		  <mesh geometry={nodes.Bubbles_Bubble_0.geometry} material={materials.Bubble} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
		  <mesh geometry={nodes.Ice001_Ice_0.geometry} material={materials.material} position={[-24.888, 289.766, -18.712]} rotation={[-1.625, 0.51, 0.11]} scale={91.637} />
		  <mesh geometry={nodes.Ice002_Ice_0.geometry} material={materials.material} position={[36.432, 289.766, -1.634]} rotation={[-1.28, -0.125, -0.519]} scale={71.156} />
		  <mesh geometry={nodes.Ice003_Ice_0.geometry} material={materials.material} position={[17.595, 294.356, -29.479]} rotation={[-1.776, -0.356, -2.295]} scale={72.305} />
		  <mesh geometry={nodes.Ice004_Ice_0.geometry} material={materials.material} position={[8.277, 294.356, 16.478]} rotation={[-1.088, -0.184, -1.065]} scale={77.093} />
		  <mesh geometry={nodes.Ice005_Ice_0.geometry} material={materials.material} position={[-25.157, 289.766, 25.192]} rotation={[-1.803, 0.216, 2.279]} scale={82.853} />
		  <mesh geometry={nodes.Ice006_Ice_0.geometry} material={materials.material} position={[-36.949, 252.127, 16.478]} rotation={[-1.088, -0.184, -1.065]} scale={77.093} />
		  <mesh geometry={nodes.Ice007_Ice_0.geometry} material={materials.material} position={[12.492, 248.297, 31.938]} rotation={[-1.423, -0.259, -2.616]} scale={91.001} />
		  <mesh geometry={nodes.Ice008_Ice_0.geometry} material={materials.material} position={[-36.949, 253.304, -33.739]} rotation={[-1.088, -0.184, -1.065]} scale={77.093} />
		  <mesh geometry={nodes.Ice009_Ice_0.geometry} material={materials.material} position={[7.95, 257.175, -9.154]} rotation={[-0.985, -0.601, -0.802]} scale={77.093} />
		</group>
	  </group>
	)
  }

const About = () => {
  return (
	<section className='about'>
		<div className="hazard-background mt-32 mb-20"></div>
		<div className='lg:grid lg:grid-cols-5'>
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
			{/* "Akira Bike" (https://skfb.ly/o9nwM) by Ryanwill679 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). -*/}
			<div className='h-screen col-span-2 flex justify-center items-end mt-5'>
				<Canvas camera={{ fov: 40, position: [3, 3, 3] }}>
					<ambientLight intensity={4.2} />
					<OrbitControls className='autoRotate' enableZoom={false} />
					<Model scale={0.49}/>
				</Canvas>
			</div>
		</div>
	</section>
  )
}

export default About
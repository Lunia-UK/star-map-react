import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Sphere } from './components/Sphere'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>  
        <Canvas className='canvas'>
            <Sphere></Sphere>
        </Canvas>
    </>
)
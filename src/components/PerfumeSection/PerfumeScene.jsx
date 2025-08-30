import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function PerfumeModel({ modelPath, color = "#A68B7D", scale = 2.2, position = [0, -2, 0] }) {
    const { scene } = useGLTF(modelPath);
    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(color);
            }
        });
    }, [scene]);

    return <primitive object={scene} position={position} scale={scale} />
}


export default function PerfumeScene({ modelPath, color, scale, position }) {
    return (
    <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <PerfumeModel 
        modelPath={modelPath}
        color={color}
        scale={scale}
        position={position} />
        <OrbitControls autoRotate />
    </Canvas>
    )
}

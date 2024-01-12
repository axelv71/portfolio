import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import Planet from "../3d/Planet";
import Mouse from "../Mouse";

function Home() {
    return (
        <div className="bg-gradient-radial from-[#26394F] via-background to-background flex items-center justify-center h-screen">
            <div className="absolute unselectable z-10">
                <h1 className='text-center text-9xl text-gray-50 font-staatliches'>Axel Vion</h1>
                <p className='text-center text-gray-50 text-xl font-roboto-mono'>Apprenti Ingénieur Logiciel</p>
            </div>
            <div className="h-screen w-full">
                <Canvas camera={{ zoom: 2.5 }} >
                    <Stars count={5000} />
                    <OrbitControls autoRotateSpeed={1} enableZoom={false} autoRotate={true} />
                    <Planet />
                </Canvas>
            </div>
            <div className="z-40 text-gray-50 absolute bottom-10">
                <Mouse />
            </div>

        </div>
    )
}

export default Home;

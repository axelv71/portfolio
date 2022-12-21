import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere, Stars} from "@react-three/drei";
import {Suspense} from "react";
import {motion} from "framer-motion";

function Contact() {
    return (
        <div id="contact" className="h-screen bg-gradient-to-b from-background via-background to-tertiary flex items-center justify-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.2 }
                }}
                className="absolute z-10 flex flex-col items-center">
                <h2 className='text-center text-7xl md:text-9xl text-gray-50 font-staatliches'>Me contacter</h2>
                <p className='text-center text-gray-50 text-xl font-roboto-mono'>Une question? Une mission? Contactez-moi!</p>
                <motion.a
                    href="mailto:axel.vion71@gmail.com"
                    initial="notHovered"
                    whileHover="hovered"
                    variants={{
                        notHovered: { borderRadius: "6px" },
                        hovered: { borderRadius: "25px" }
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    whileTap={{ scale: 1.1 }}
                    className="bg-tertiary text-center text-gray-50 text-normal px-4 py-2 font-rubik font-bold uppercase w-fit mt-4 unselectable"
                >
                    Contacter
                </motion.a>
            </motion.div>
            <div className="w-screen h-full">
                <Canvas draggable={false}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Sphere visible args={[1, 100, 200]} scale={1.6}>
                            <MeshDistortMaterial color="#740CDC" attach="material" distort={0.5} />
                        </Sphere>
                    </Suspense>
                </Canvas>
            </div>
        </div>
  );
}

export default Contact;

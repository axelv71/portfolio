import {Canvas} from "@react-three/fiber";
import Boi from "./Boi";
import {OrbitControls} from "@react-three/drei";
import {motion} from "framer-motion";
import styles from '../styles/About.module.css'

function About() {
    return (
        <div className="flex items-center flex-col md:flex-row pt-6 md:pt-0">
            <div className="text-gray-50 md:w-1/2 md:pl-16">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    className="font-staatliches text-7xl text-center md:text-left">À propos</motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    className="font-roboto-mono mt-4 text-center md:text-left">Je m’appelle Axel Vion, j’ai 20 ans et je suis actuellement en <span className="text-secondary">Bachelor Concepteur Développeur d’application</span> au <span className="text-secondary">CESI</span>. Je suis passionné par l’informatique et j’aspire à faire de ma passion mon métier. Je suis également titulaire du permis de conduire, je peux donc me déplacer librement.</motion.p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    className="mt-3 font-roboto-mono text-center md:text-left">
                    <p>Voici quelques-unes de mes compétences:</p>
                    <ul className={`${styles.list_triangle} mt-1 marker:text-secondary`}>
                        <li>Java</li>
                        <li>Frameworks Javascript</li>
                        <li>Docker</li>
                        <li>Laravel</li>
                        <li>Symfony</li>
                        <li>C#</li>
                        <li>React Native</li>
                        <li>Git</li>
                        <li>NodeJS</li>
                        <li>SQL</li>
                    </ul>
                </motion.div>
            </div>
            <div className=" h-128 md:w-1/2 w-screen">
                <Canvas className="rounded" camera={{ zoom: 1 }}>
                    <OrbitControls enableZoom={false} enableRotate={false} autoRotate={false} />
                    <Boi />
                </Canvas>
            </div>
        </div>
    )
}

export default About

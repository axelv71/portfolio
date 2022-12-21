import {motion} from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import {experiences} from "../data/Experiences";

function Experiences() {
    return (
        <div id="experiences" className="pb-5">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.2 }
                }}
                className="text-gray-50 font-staatliches text-6xl text-center">Expériences</motion.h2>
            <div className="flex w-screen justify-center">
                <div className="w-full lg:w-3/4 xl:w-1/2 px-4 xl:px-0">
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} _id={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences;

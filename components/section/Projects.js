import {projects} from "../../data/Projects";
import ProjectItem from "../items/ProjectItem";
import {motion} from "framer-motion";

function Projects() {
    return (
        <div id="projects" className="py-12 grid grid-cols-5">
            <div className="col-span-5 lg:col-span-3 col-start-1 lg:col-start-2 px-4 sm:px-10 lg:px-0">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.2 }
                    }}
                    className="font-staatliches text-gray-50 text-7xl text-center">Mes projets</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-6">
                    {projects.map((project) => <ProjectItem key={project._id} project={project} />)}
                </div>
            </div>
        </div>
    )
}

export default Projects;

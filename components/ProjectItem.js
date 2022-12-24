import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {motion} from "framer-motion";

function ProjectItem({ project }) {
    function truncate(string) {
        const MAX_LENGTH = 250
        if (string.length > MAX_LENGTH)
        {
            return string.slice(0, MAX_LENGTH) + "..."
        } else {
            return string
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.2 }
            }}>
            <motion.div
                initial="noHover"
                whileHover="hover"
                className="relative">
                <motion.div
                    variants={{
                        hover: {opacity: 1},
                        noHover: {opacity: 0}
                    }}
                    className="absolute h-full w-full flex items-center justify-center">
                    <Link href={`/project/${project._id}`} className="bg-tertiary text-gray-50 px-3 py-2 rounded-t-xl w-full h-full flex items-center justify-center opacity-90">
                        <div className="font-bold font-roboto-mono">En savoir plus</div>
                    </Link>
                </motion.div>
                <Image className="w-full h-56 object-cover rounded-t-xl" src={`/assets/img/${project.image}`} width={700} height={700} alt={project.image} />
            </motion.div>
            <div className="bg-second-background p-4 rounded-b-xl">
                <div className="flex items-center">
                    <h4 className="text-gray-50 font-rubik font-bold text-xl">{project.name}</h4>
                    {project.links ? (
                        <div className="flex ml-2">
                            {project.links.website ? (
                                <a target="_blank" href={project.links.website} rel="noreferrer">
                                    <FontAwesomeIcon className="text-sm text-secondary mr-2" icon={faArrowUpRightFromSquare} />
                                </a>
                            ) : ''}
                            {project.links.github ? (
                                <a target="_blank" href={project.links.github} rel="noreferrer">
                                    <FontAwesomeIcon className="text-sm text-secondary" icon={faGithub} />
                                </a>
                            ) : ''}
                        </div>
                    ) : ''}
                </div>
                <p className="text-gray-50 font-roboto-mono text-sm overflow-hidden">{truncate(project.description)}</p>
            </div>
        </motion.div>
    )
}

export default ProjectItem

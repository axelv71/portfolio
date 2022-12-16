import {projects} from "../../data/Projects";
import Layout from "../../components/Layout";
import Image from "next/image";
import SkillPill from "../../components/SkillPill";
import styles from "../../styles/Project.module.css"
import {motion} from "framer-motion";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import ProjectItem from "../../components/ProjectItem";

export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { id: project._id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const project = projects.find((project) => project._id.toString() === params.id);
    const otherProjects = projects.filter((project) => project._id.toString() !== params.id);

    return {
        props: {
            project,
            otherProjects,
        },
    };
}

function Project({ project, otherProjects }) {
    return (
        <Layout>
            <div className="min-h-screen pt-28 px-7">
                <div className="flex justify-between flex-col lg:flex-row-reverse h-min items-center">
                    <div className="lg:w-3/6 text-gray-50 mb-8">
                        <div className="flex flex-col lg:flex-row-reverse items-baseline">
                            <h1 className="text-7xl font-bold font-staatliches text-center lg:text-right w-full lg:w-fit lg:ml-2">{project.name}</h1>
                            {project.links ? (
                                <div className="flex justify-center lg:justify-start w-full lg:w-fit">
                                    {project.links.website ? (
                                        <Link href={project.links.website}>
                                            <FontAwesomeIcon className="text-xl text-secondary mr-3" icon={faArrowUpRightFromSquare} />
                                        </Link>
                                    ) : ''}
                                    {project.links.github ? (
                                        <Link href={project.links.github}>
                                            <FontAwesomeIcon className="text-xl text-secondary" icon={faGithub} />
                                        </Link>
                                    ) : ''}
                                </div>
                            ) : ''}
                        </div>
                        <p className="font-roboto-mono text-center lg:text-right">{project.description}</p>
                        <div className="text-center lg:text-right mt-5">
                            {project.skills.map((skill, index) => <SkillPill key={`${project._id}${index}`} skill={skill} />)}
                        </div>
                    </div>
                    <div className="lg:w-3/6 lg:px-12">
                       <motion.div
                           initial="noHovered"
                           whileHover="hovered"
                           className={`rounded`}>
                           <Image className={`rounded w-full ${styles.drop_shadow_image}`} src={`/assets/img/${project.image}`} alt={project.image} width={1300} height={1300} />
                       </motion.div>
                    </div>
                </div>

                <div className=" py-12 mt-7 grid grid-cols-5">
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
                            className="font-staatliches text-gray-50 text-6xl text-center">Mes autres projets</motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-6">
                            {otherProjects.map((project) => <ProjectItem key={project._id} project={project} />)}
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Project;

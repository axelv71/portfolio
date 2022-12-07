import {motion, AnimatePresence, useCycle} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLink, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Rect = (props) => (
    <motion.rect rx="6" {...props} />
)

function ExperienceItem({ experience, _id }) {
    const [isOpen, setIsOpen] = useCycle(false, true);

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
            <motion.header
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                key="experience"
                className="rounded bg-tertiary text-gray-50 font-rubik px-5 py-4 mt-5"
                variants={{
                    open: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
                    closed: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }
                }}
                onClick={() => setIsOpen()}>
                <div className="flex justify-between">
                    <h1 className="font-bold">
                        {experience.title} @ {experience.company.name}
                    </h1>
                    <div className="flex items-center">
                        <span className="hidden sm:block">{ experience.from } - {experience.to}</span>
                        <i className="ml-2">
                            <svg aria-hidden="true" className="fill-gray-50" width="16" height="16"
                                 role="img" version="1.1" viewBox="0 0 64 64">
                                <Rect y="27" width="64" height="10"/>
                                <Rect
                                    variants={{
                                        open: { width: 64, height: 10, y: 27 },
                                        closed: { width: 10, height: 64, y: 0 }
                                    }}
                                    x="27"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
                        <div className="px-5 py-4 bg-dark-blue rounded-b">
                            <div className="text-gray-50 flex flex-col sm:flex-row">
                                <div className="flex items-center font-roboto-mono text-sm italic mb-1 block sm:hidden">
                                    <i className="text-tertiary mr-3"><FontAwesomeIcon className="text-xl" icon={faCalendar} /></i>
                                    {experience.from} - {experience.to}
                                </div>
                                <div className="flex items-center font-roboto-mono text-sm italic">
                                    <i className="text-tertiary mr-3"><FontAwesomeIcon className="text-xl" icon={faLocationDot} /></i>
                                    {experience.company.location}
                                </div>
                                { experience.company.website ? (
                                    <div className="flex items-center font-roboto-mono text-sm italic ml-0 sm:ml-5 mt-1 sm:mt-0">
                                        <i className="text-tertiary mr-3"><FontAwesomeIcon className="text-xl" icon={faLink} /></i>
                                        <a className="hover:text-secondary duration-200 ease-in" href={experience.company.website}>{experience.company.website}</a>
                                    </div>
                                ): ""}
                            </div>
                            <div className="mt-3 flex">
                                <div>
                                    <p className="text-gray-50 font-roboto-mono break-words text-sm pr-0 md:pr-9">{experience.description}</p>
                                    <div className="mt-5 flex flex-wrap">
                                        {experience.skills.map((skill, index) => (
                                            <span key={`${_id}${index}`} className="rounded-full bg-tertiary text-gray-50 px-4 py-2 font-roboto-mono text-sm mr-2 mt-2">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <Image src={`/assets/logo/${experience.logo}`} className="float-right w-32 h-32 hidden md:block rounded-lg" width={100} height={100} alt={experience.company.name} />
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default ExperienceItem

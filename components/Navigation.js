import {motion} from "framer-motion";

function Navigation() {
    return (
        <>
            <nav className="py-5 px-5 flex items-center justify-between text-sm fixed w-screen z-50">
                <div className="hidden md:block">
                    <ul className="font-roboto-mono flex text-gray-50">
                        <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary"><span className="text-secondary mr-1">01.</span>Accueil</li>
                        <li className="mr-4 hover:text-secondary hover:border-b hover:border-secondary"><span className="text-secondary mr-1">02.</span>À propos</li>
                        <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary"><span className="text-secondary mr-1">03.</span>Projets</li>
                        <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary"><span className="text-secondary mr-1">04.</span>Expériences</li>
                        <li className="hover:text-secondary hover:border-b hover:border-secondary"><span className="text-secondary mr-1">05.</span>Contact</li>
                    </ul>
                </div>
                <motion.button
                    whileHover={{
                        backgroundColor: '#00FFE0',
                        color: 'white'
                    }}
                    whileTap={{
                        scale: 1.1,
                    }}
                    className="border border-secondary font-semibold text-secondary text-sm px-4 py-2 font-roboto-mono rounded uppercase">Mon CV</motion.button>
            </nav>
        </>
    )
}

export default Navigation

import {motion, useCycle} from "framer-motion";
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";
import ItemList from "./ItemList";
import styles from '../../styles/Navigation.module.css';

function Navigation() {
    const [isOpen, setIsOpen] = useCycle(false, true);

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}>
            <nav className={`py-5 px-5 flex items-center justify-between text-sm fixed w-screen z-50 ${styles.nav_gradient}`}>
                <div className="hidden md:block">
                    <ItemList setIsOpen={setIsOpen} />
                </div>
                <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
                <motion.button
                    whileHover={{
                        backgroundColor: '#00FFE0',
                        color: 'white'
                    }}
                    whileTap={{
                        scale: 1.1,
                    }}
                    className="border border-secondary text-secondary text-sm px-4 py-2 font-roboto-mono font-bold rounded uppercase" >Mon CV</motion.button>
            </nav>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
    )
}

export default Navigation

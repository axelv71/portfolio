import {motion, useCycle} from "framer-motion";
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";
import ItemList from "./ItemList";
import styles from '../../styles/Navigation.module.css';
import Link from "next/link";

function Navigation() {
    const [isOpen, setIsOpen] = useCycle(false, true);

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}>
            <nav className={`py-5 px-5 flex items-center justify-between text-sm fixed w-full z-50 ${styles.nav_gradient}`}>
                <div className="hidden md:block">
                    <ItemList setIsOpen={setIsOpen} />
                </div>
                <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />

                    <motion.a
                        href="https://drive.google.com/file/d/1iFdI-tqN5Iy1_AZweSlD89a1kAKTUIMz/view?usp=sharing"
                        target="_blank"
                        download
                        whileHover={{
                            backgroundColor: '#00FFE0',
                            color: 'white'
                        }}
                        whileTap={{
                            scale: 1.1,
                        }}
                        className="border border-secondary text-secondary text-sm px-4 py-2 font-roboto-mono font-bold rounded uppercase" >
                        Mon CV
                    </motion.a>

            </nav>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
    )
}

export default Navigation

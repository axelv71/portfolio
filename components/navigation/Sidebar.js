import Link from "next/link";
import {motion} from "framer-motion";
import ItemList from "./ItemList";

function Sidebar({isOpen, setIsOpen}) {
    return (
        <motion.aside
            variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: "-100%" },
            }}
            className="h-screen bg-dark-blue w-fit fixed z-40 flex items-center justify-center px-10 md:hidden">
            <ItemList setIsOpen={setIsOpen} />
        </motion.aside>
    )
}

export default Sidebar;

import {motion} from "framer-motion";

const Path = props => (
    <motion.path
        strokeWidth="3"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        {...props}
    />
);

function MenuToggle({isOpen, setIsOpen}) {
    return (
        <motion.button
            variants={{
                closed: {background: '#06264B'},
                open: {background: 'rgba(4,26,52,0)'}
            }}
            onClick={() => setIsOpen()} className="p-3 rounded-full text-gray-50 md:hidden">
            <svg className="fill-gray-50 text-gray-50" width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 3.5 L 21.5 3.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 10.423 L 21.5 10.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 17.346 L 21.5 17.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </motion.button>
    )
}

export default MenuToggle;

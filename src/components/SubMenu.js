import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const SubMenu = ({menuName, children}) => {
    const [isCollapsed, setCollapsed] = useState(true);

    const variants = {
        collapsed: {
            height: 0,
            opacity: 0,
            overflow: "hidden",
        },
        open: {
            height: "auto",
            opacity: 1,
        }
    };

    return (
        <>
            <button className="list-group-item list-group-item-action" onClick={() => setCollapsed(current => !current)}>
                {menuName}
            </button>
            <AnimatePresence initial={false}>
                {!isCollapsed && (
                    <motion.div
                        key="content" initial="collapsed" animate="open" exit="collapsed" variants={variants}
                        transition={{ duration: 0.7}}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
};

export default SubMenu;
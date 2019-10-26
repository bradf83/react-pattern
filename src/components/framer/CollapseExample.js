import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

const CollapseExample = () => {


    return (
        <>
            <h5>Collapse Example</h5>

            <Collapse label="Click Me">
                <div className="bg-danger text-white rounded p-1">Some Content</div>
            </Collapse>
            <Collapse label="Click Me 2">
                <div className="bg-warning text-white rounded p-1">Some Content</div>
            </Collapse>
        </>
    )
};

export const Collapse = ({label, children}) => {
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
            <div className="bg-secondary rounded p-1 my-1" onClick={() => setCollapsed(current => !current)}>
                {label}
            </div>
            <AnimatePresence initial={false}>
                {!isCollapsed && (
                    <motion.div
                        key="content" initial="collapsed" animate="open" exit="collapsed" variants={variants}
                        transition={{ duration: 0.8}}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
};

export default CollapseExample;
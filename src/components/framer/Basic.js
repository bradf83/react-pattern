import React, {useState} from 'react';
import {motion} from "framer-motion";

const Basic = () => {
    const [isToggled, setToggled] = useState(false);

    const variants = {
        red: {
            background: "red",
            scale: 1,
        },
        blue: {
            background: "blue",
            scale: 1.5,
        }
    };

    return (
        <>
            <h5>Basic Example</h5>
            <motion.div style={{height: 100, width: 100, borderRadius: 10}} className="text-white text-center m-5"
                        onClick={() => setToggled(current => !current)}
                        animate={isToggled ? "red" : "blue"} variants={variants}>
                Click Me!
            </motion.div>
        </>
    )
};

export default Basic;
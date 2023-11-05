"use client";

import {motion, AnimationPresence} from "framer-motion";

export const PageWrapper = ({ children }) => (
    <>
        <AnimationPresence>
            <motion.div 
            initial = {{opacity:0, y:15}}
            animate = {{opacity:1, y:0}}
            exist = {{opacity:0, y:15}} 
            transition = {{delay:0.5}}>
                {children}
            </motion.div>
        </AnimationPresence>
    </>
);

// export  PageWrapper;
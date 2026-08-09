import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const FadeInOnScroll = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <MotionDiv
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={ inView ? { opacity: 1, y: 0} : {opacity: 0, y: 30}}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </MotionDiv>
    )
};

export default FadeInOnScroll;
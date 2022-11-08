import "./AboutPage.css";
import React from "react";
import {motion} from "framer-motion";
function AboutPage() {
    return (
        <h1 class="hero-container" id="hero-sec">
            <motion.div animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}>
            Im from CS5A
            </motion.div>
            
        </h1>
    )
}

export default AboutPage;
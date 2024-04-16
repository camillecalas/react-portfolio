import React from 'react'
import { motion } from "framer-motion";

//IMAGES
import home1 from '../img/home1.png'

//STYLES
import { BasicLayout, Description, Image, Hide } from '../styles'

const AboutSection = () => {

	return (
		<BasicLayout>
			<Description>
				<motion.div className="title">
					<Hide>
						<motion.h2 >
							We work to make
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>your <span>dreams</span> </motion.h2>
					</Hide>
					<Hide>
						<motion.h2>come true.</motion.h2>
					</Hide>
				</motion.div>
				<p>Contact us for any photography or vidography ideas that you have. We are professionals with amazing skills</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt="guy with a camera" />
			</Image>
		</BasicLayout>
	)
}

export default AboutSection
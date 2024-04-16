import React from 'react'

import Wave from './Wave'
//IMAGES
import home1 from '../img/home1.png'

//STYLES
import { BasicLayout, Description, Image, Hide } from '../styles'

//ANIMATION
import {motion} from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'

const AboutSection = () => {

	return (
		<BasicLayout>
			<Description>
				<motion.div className="title">
					<Hide>
						<motion.h2 variants={titleAnim}>
							We work to make
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>your <span>dreams</span> </motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>come true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>Contact us for any photography or vidography ideas that you have. We are professionals with amazing skills</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
			</Image>
			<Wave/>
		</BasicLayout>
	)
}

export default AboutSection
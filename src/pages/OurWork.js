import React from 'react';
import { Link } from 'react-router-dom';

//STYLES
import styled from 'styled-components'

//ANIMATION
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'

//DATA
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png"

const OurWork = () => {
  return (
	<Work style={{ background: "#fff" }} 
		variants={pageAnimation} 
		initial='hidden' 
		animate='show' 
		exit='exit'
	>
		<Movie>
			<h2>The Athlete</h2>
			<div className="line"></div>
				<Link to="/work/the-athlete">
					<img src={athlete} alt="athlete" />
				</Link>
		</Movie>

		<Movie>
			<h2>The racer</h2>
			<div className="line"></div>
			<Link to="/work/the-racer">
					<img src={theracer} alt="racer" />
				</Link>
		</Movie>

		<Movie>
			<h2>Good Time</h2>
			<div className="line"></div>
				<Link to="/work/good-times">
					<img src={goodtimes} alt="good time" />
				</Link>
		</Movie>
	</Work>
  )
}

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;

	h2{
		padding: 1rem 0rem;
	}
`;

const Movie = styled.div`
	padding-bottom: 10rem;

	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
  	}

	img{
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default OurWork
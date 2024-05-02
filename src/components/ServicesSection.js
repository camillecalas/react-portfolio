import React from 'react'
import {useInView} from 'react-intersection-observer'

import { useAnimation } from 'framer-motion'

//DATA
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'


//STYLES
import styled from 'styled-components'
import { BasicLayout, Description, Image,  } from '../styles'
import { scrollReveal } from "../animation";
import useScroll from './useScroll'

const ServicesSection = () => {
	const [element, controls] = useScroll();
  	return (
	<Services
		variants={scrollReveal}
		animate={controls}
		initial={"hidden"}
		ref={element}
	>
		<Description>
			<h2>High <span>quality</span> services</h2>
			<Cards>
				<Card>
					<div className="icon">
						<img src={clock} alt="icon of clock" />
						<h3>Efficient</h3>
					</div>
					<p>Lorem fdeferf fefe</p>
				</Card>

				<Card>
					<div className="icon">
						<img src={teamwork} alt="icon of team work" />
						<h3>Team work</h3>
					</div>
					<p>Lorem fdeferf fefe</p>
				</Card>

				<Card>
					<div className="icon">
						<img src={diaphragm} alt="icon of diaphragm" />
						<h3>Diaphragm</h3>
					</div>
					<p>Lorem fdeferf fefe</p>
				</Card>

				<Card>
					<div className="icon">
						<img src={money} alt="icon of money" />
						<h3>Affordable</h3>
					</div>
					<p>Lorem fdeferf fefe</p>
				</Card>

			</Cards>
		</Description>
		<Image>
			<img src={home2} alt="camera" />
		</Image>
	</Services>
  )
}

const Services = styled(BasicLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 1300px){
		justify-content: center;
	}
`

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from "react-router-dom";

const Nav = () => {
	const {pathname} = useLocation()
  return (
	<StyledNav>
		<h1>
			<Link id="logo" to="/"> Capture </Link>
		</h1>
		<ul>
			<li>
				<Link className="link" to="/">1. About Us </Link> 
				<Line
					transition={{ duration: 0.75 }}
					initial={{ width: "0%" }}
					animate={{ width: pathname === "/" ? "50%" : "0%" }}
				/>
			</li>
			<li>
				<Link className="link" to="/work">2. Our Work </Link> 
				<Line
					transition={{ duration: 0.75 }}
					initial={{ width: "0%" }}
					animate={{ width: pathname === "/work" ? "50%" : "0%" }}
				/>
			</li>
			<li>
				<Link className="link" to="/contact">3. Contact Us </Link> 
				<Line
					transition={{ duration: 0.75 }}
					initial={{ width: "0%" }}
					animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
			</li>
		</ul>
	</StyledNav>
  )
}

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;

	.link{
		color: white;
		text-decoration: none;
		font-size: 1rem;
		font-weight: lighter;
	}

	ul{
		display: flex;
		list-style: none;
	}

	li{
		padding-left: 10rem;
		position: relative;
	}

	#logo{
		font-size: 1.5rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
		color: white;
		text-decoration: none;
	}

	@media (max-width: 1300px){
		flex-direction: column;
		padding: 2rem 1rem;

		#logo{
			display: inline-block;
			margin: 2rem;
		}

		ul{
			padding: 2rem;
			justify-content: space-around;
			width: 100%;

			li{
				padding: 0;
			}
		}
	}

`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav
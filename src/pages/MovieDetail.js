import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'

//ANIMATION
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'

//STYLES
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

//DATA
import {MovieState} from '../movieState'


//COMPONENT
const Award = ({title, description}) => {
	return (
		<SingleAward>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</SingleAward>
	)
}


const MovieDetail = () => {

	const url = useLocation(); // Use useLocation hook
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState({});
  
	//UseEffect
	useEffect(() => {
	  const currentMovie = movies.filter(
		(stateMovie) => stateMovie.url === url.pathname
	);
	  setMovie(currentMovie[0]);
	}, [movies, url]);

	console.log(movie.awards)
	return ( 
		<>
			{movie && (
			<Details variants={pageAnimation} initial='hidden' animate='show' exit='exit'> 
				<Headline>
					<h2>{movie.title}</h2>
					<img src={movie.mainImg} alt={movie.title} />
				</Headline>
				{movie.awards && movie.awards[0] &&(
					<StyledAwards>
						{movie.awards.map((a) => (
							<Award
								title={a.title}
								description={a.description}
								key={a.title}
							/>
						))}
					</StyledAwards>
			
				)}
						<ImageDisplay >
							<img src={movie.secondaryImg} alt="" />
						</ImageDisplay>
			</Details>
			)}
			<ScrollTop/>
	  </>
	)
}

const Details = styled(motion.div)`
	color:white;
`

const Headline = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;

	h2{
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}

	img{
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`

const StyledAwards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`

const SingleAward = styled.div`
	padding: 5rem;
	h3{
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23D997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
	p{
		padding: 2rem 0rem;
	}
`

const ImageDisplay = styled.div`
	min-height: 50vh;
	img{
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`


export default MovieDetail
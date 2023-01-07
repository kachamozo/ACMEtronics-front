// crear una landing page que tenga un boton que diga "start" y que te lleve a la ruta /home
// y otro boton que te lleve a la landing page
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Landing.css';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { logged } from '../../redux/actions/index';


function Landing() {
	const { isAuthenticated, user } = useAuth0();

	const dispatch = useDispatch();

	if (isAuthenticated) {
		useEffect(() => {
			dispatch(logged(user));
		}, []);
	}
	return (
		<>
			<div className='landing'>
				<div className='landing__container'>
					<h2>WELCOME TO :</h2>
					<h1>ACMEtronics</h1>
					<h3>The Best Place To Buy Electronics</h3>
				</div>
				<div className='landing__btn'>
					<NavLink to='/home'>
						<button className='btn'>ENTER</button>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default Landing;

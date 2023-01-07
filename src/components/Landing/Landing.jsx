import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Landing.css';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { addGmailuser, logged } from '../../redux/actions/index';


function Landing() {
	const { isAuthenticated, user } = useAuth0();

	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuthenticated) {
			dispatch(logged(user));
            let data =  {
                given_name: user.given_name,
                family_name: user.family_name,
                email: user.email,
                nickname: user.nickname,
              }
            dispatch(addGmailuser(data))
		}
	}, [isAuthenticated]);
	return (
		<>
			<div className='landing' >
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

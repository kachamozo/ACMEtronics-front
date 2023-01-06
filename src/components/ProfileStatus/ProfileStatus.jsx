import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ProfileStatus.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import EditProfile from '../EditProfile/EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearCart, logoutUser } from '../../redux/actions';
import { WindowSharp } from '@mui/icons-material';

function ProfileStatus({ showModal, closeModal }) {
	const { user, isAuthenticated, logout } = useAuth0();
	const dispatch = useDispatch();
	const actualUser = useSelector((state) => state.user);
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(actualUser));
	}, [actualUser]);

	const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);

	function toggleEditProfileModal() {
		setEditProfileModalVisible(!editProfileModalVisible);
	}
	const logoutu = () => {
		dispatch(logoutUser());
		dispatch(clearCart());
	};

	const handleLogOut = () => {
		logout({ returnTo: window.location.origin });
		window.localStorage.clear();
		dispatch(clearCart());
	};

	if (isAuthenticated) {
		return (
			<Modal show={showModal} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>User Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<img src={user.picture} alt={user.name} />
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className='green_btn'
						variant='secondary'
						onClick={closeModal}
					>
						Close
					</Button>

					<Button
						className='green_btn'
						variant='primary'
						onClick={toggleEditProfileModal}
					>
						Edit Profile
					</Button>
					<Button
						className='green_btn'
						variant='primary'
						onClick={() => handleLogOut()}
					>
						Logout
					</Button>
				</Modal.Footer>
				{editProfileModalVisible && (
					<EditProfile
						showModal={editProfileModalVisible}
						closeModal={toggleEditProfileModal}
					/>
				)}
			</Modal>
		);
	} else if (Object.keys(actualUser).length !== 0) {
		return (
			<Modal show={showModal} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>User Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div>
							<img
								src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
								alt='profile-img'
								className='profile-img-card'
							/>
						</div>
						<br />
						<h2>{actualUser.data.searchUser.firstname}</h2>
						<h2>{actualUser.data.searchUser.lastname}</h2>
						<p>{actualUser.data.searchUser.email}</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className='green_btn'
						variant='secondary'
						onClick={closeModal}
					>
						Close
					</Button>

					<Button
						className='green_btn'
						variant='primary'
						onClick={toggleEditProfileModal}
					>
						Edit Profile
					</Button>
					<Button
						className='green_btn'
						variant='primary'
						onClick={() => logoutu()}
					>
						Logout
					</Button>
				</Modal.Footer>
				{editProfileModalVisible && (
					<EditProfile
						showModal={editProfileModalVisible}
						closeModal={toggleEditProfileModal}
					/>
				)}
			</Modal>
		);
	} else {
		return (
			<Modal show={showModal} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Welcome, Login to your account or Sign Up</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Button className='green_btn' onClick={closeModal}>
							<Link to='/login' className='link-to'>
								Login
							</Link>
						</Button>
						<Button className='green_btn' onClick={closeModal}>
							<Link to='/signup' className='link-to'>
								Sign Up
							</Link>
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default ProfileStatus;

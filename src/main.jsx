import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<Auth0Provider domain="dev-sve7tybsaqbts55j.us.auth0.com" clientId="UXFcl55PA5iRbLJBdYCv8iloPUPiyHup" redirectUri={window.location.origin}>
					<App />
				</Auth0Provider>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
);

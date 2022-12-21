import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Auth0Provider
				domain='dev-mdvrjlkwsu0q1u2j.us.auth0.com'
				clientId='AYhTbnrpD7KIFtYsDRbx80zmhQfMpnsS'
				redirectUri={window.location.origin}
			>
				<App />
			</Auth0Provider>
		</BrowserRouter>
	</Provider>
);

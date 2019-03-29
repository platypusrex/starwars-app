import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import { apolloClient } from './shared/configs/apolloClient';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/styled';
import { GlobalStyles } from './shared/styled/global';
import { App } from './App';
import 'typeface-sniglet';
import 'typeface-oswald';
import 'typeface-lato';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<Router>
			<>
				<GlobalStyles/>
				<ThemeProvider theme={theme}>
					<App/>
				</ThemeProvider>
			</>
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();

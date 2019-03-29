import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html, body {
		height: 100%;
	}
	
	html {
		overflow: auto;
	}
	
	#root {
		display: flex;
		min-height: 100%;
	}
	
	body {
		margin: 0;
		padding: 0;
		font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif !important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	h1, h2, h3, h4, h5, h6 {
		font-family: 'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	}
	
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
`;
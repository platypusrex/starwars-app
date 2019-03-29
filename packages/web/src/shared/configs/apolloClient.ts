import { ApolloClient } from 'apollo-client';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const dataIdFromObject = (object: any) => {
	const typename = object.__typename;

	switch (typename) {
		case 'Film': return `${typename}:${object.title}`;
		case 'Character':
		case 'Planet':
		case 'Starship':
		case 'Vehicle':
		case 'Specie':
			return `${typename}:${object.name}`;
		default: return defaultDataIdFromObject(object);
	}
};

const link = new RestLink({ uri: 'https://swapi.co/api' });
const cache = new InMemoryCache({ dataIdFromObject});

export const apolloClient = new ApolloClient({
	link,
	cache,
	connectToDevTools: true
});
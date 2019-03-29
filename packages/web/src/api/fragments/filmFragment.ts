import gql from 'graphql-tag';

export const FilmFragment = gql`
	fragment Film on Film {
    created
    director
    edited
    episode_id
    opening_crawl
    producer
    release_date
    title
    url
    characters
    planets
    starships
    vehicles
    species
	}
`;
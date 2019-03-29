import gql from 'graphql-tag';

export const CharacterFragment = gql`
	fragment Character on Character {
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
    homeworld
    films
    species
    vehicles
    starships
    created
    edited
    url
	}
`;
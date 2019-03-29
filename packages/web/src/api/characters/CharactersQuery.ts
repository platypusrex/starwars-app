import gql from 'graphql-tag';
import { CharacterFragment } from '../fragments/characterFragment';

export const charactersQuery = gql`
	query CharactersQuery ($page: Int) {
		getCharacters (page: $page) @rest(type: "CharactersPayload", path: "/people?{args}") {
      count
      next
      previous
			results @type(name: "Character") {
				...Character
			}
		}
	}
	${CharacterFragment}
`;
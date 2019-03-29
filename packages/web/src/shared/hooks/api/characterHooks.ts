import { useQuery, QueryHookResult } from 'react-apollo-hooks';
import { charactersQuery } from '../../../api/characters/CharactersQuery';
import { characterByIdQuery } from '../../../api/characters/CharacterByIdQuery';
import { useLoading } from '../useLoading';
import {
	Character,
	CharactersQuery,
	CharactersQueryVariables,
	CharacterByIdQuery,
	CharacterByIdQueryVariables,
	CharactersQuery_getCharacters
} from '../../types/generated';

type CharactersQueryResult = QueryHookResult<CharactersQuery, CharactersQueryVariables>;
type NormalizedCharactersResult =
	Pick<
		CharactersQuery_getCharacters,
		Exclude<keyof CharactersQuery_getCharacters, '__typename' | 'results'>
	>;
interface UseCharacters extends CharactersQueryResult, NormalizedCharactersResult {
	characters: Character[];
}

export function useCharacters (page?: number): UseCharacters {
	const { ...props } = useQuery<CharactersQuery, CharactersQueryVariables>(charactersQuery, {
		variables: { page }
	});
	const data = props.data;
	const getCharacters =
		data &&
		data.getCharacters;
	const count =
		getCharacters &&
		getCharacters.count || 0;
	const next =
		getCharacters &&
		getCharacters.next || '';
	const previous =
		getCharacters &&
		getCharacters.previous || '';
	const characters =
		getCharacters &&
		getCharacters.results &&
		getCharacters.results.sort((a, b) => a.name.localeCompare(b.name)) || [];

	return { characters, count, next, previous, ...props };
}

type CharacterByIdResult = QueryHookResult<CharacterByIdQuery, CharacterByIdQueryVariables>;
interface UseCharacterById extends CharacterByIdResult {
	character?: Character;
}

export function useCharacterById (characterId: number, addLoadingIndicator?: boolean): UseCharacterById {
	const { ...props } =
		useQuery<CharacterByIdQuery, CharacterByIdQueryVariables>(characterByIdQuery, {
			variables: { characterId }
		});
	const data = props.data;

	if (addLoadingIndicator) {
		useLoading(props.loading);
	}

	const character =
		data &&
		data.getCharacterById;

	return { character, ...props };
}
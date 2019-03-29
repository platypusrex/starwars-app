import * as React from 'react';
import { useCharacterById } from '../../hooks/api/characterHooks';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { generatePath } from 'react-router';
import { Routes } from '../../constants/routes';
import ListItem, { ListItemIdProps } from './ListItem';

const ListItemCharacter: React.FC<ListItemIdProps> = ({ id }) => {
	const { character, loading } = useCharacterById(id);

	if (!character && !loading) {
		return null;
	}

	const characterId = extractIdFromUrl(character && character.url || '');
	const characterUrl = generatePath(Routes.CHARACTER_DETAIL, { characterId });

	return (
		<ListItem
			loading={loading}
			name={character && character.name}
			detailsUrl={characterUrl}
		/>
	)
};

export default ListItemCharacter;
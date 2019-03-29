import * as React from 'react';
import { useStarshipById } from '../../hooks/api/starshipHooks';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { generatePath } from 'react-router';
import { Routes } from '../../constants/routes';
import ListItem, { ListItemIdProps } from './ListItem';

const ListItemStarship: React.FC<ListItemIdProps> = ({ id }) => {
	const { starship, loading } = useStarshipById(id);

	if (!starship && !loading) {
		return null;
	}

	const starshipId = extractIdFromUrl(starship && starship.url || '');
	const starshipUrl = generatePath(Routes.STARSHIP_DETAIL, { starshipId });

	return (
		<ListItem
			loading={loading}
			name={starship && starship.name}
			detailsUrl={starshipUrl}
		/>
	)
};

export default ListItemStarship;
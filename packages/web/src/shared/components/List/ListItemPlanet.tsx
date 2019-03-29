import * as React from 'react';
import { usePlanetById } from '../../hooks/api/planetHooks';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { generatePath } from 'react-router';
import { Routes } from '../../constants/routes';
import ListItem, { ListItemIdProps } from './ListItem';

const ListItemPlanet: React.FC<ListItemIdProps> = ({ id }) => {
	const { planet, loading } = usePlanetById(id);

	if (!planet && !loading) {
		return null;
	}

	const planetId = extractIdFromUrl(planet && planet.url || '');
	const planetUrl = generatePath(Routes.PLANET_DETAIL, { planetId });

	return (
		<ListItem
			loading={loading}
			name={planet && planet.name}
			detailsUrl={planetUrl}
		/>
	)
};

export default ListItemPlanet;
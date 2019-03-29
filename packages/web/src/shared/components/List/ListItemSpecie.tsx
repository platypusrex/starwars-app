import * as React from 'react';
import { useSpecieById } from '../../hooks/api/specieHooks';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { generatePath } from 'react-router';
import { Routes } from '../../constants/routes';
import ListItem, { ListItemIdProps } from './ListItem';

const ListItemSpecie: React.FC<ListItemIdProps> = ({ id }) => {
	const { specie, loading } = useSpecieById(id);

	if (!specie && !loading) {
		return null;
	}

	const specieId = extractIdFromUrl(specie && specie.url || '');
	const specieUrl = generatePath(Routes.SPECIES_DETAIL, { specieId });

	return (
		<ListItem
			loading={loading}
			name={specie && specie.name}
			detailsUrl={specieUrl}
		/>
	)
};

export default ListItemSpecie;
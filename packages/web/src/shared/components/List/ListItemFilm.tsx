import * as React from 'react';
import { useFilmById } from '../../hooks/api/filmHooks';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { generatePath } from 'react-router';
import { Routes } from '../../constants/routes';
import ListItem, { ListItemIdProps } from './ListItem';

const ListItemFilm: React.FC<ListItemIdProps> = ({ id }) => {
	const { film, loading } = useFilmById(id);

	if (!film && !loading) {
		return null;
	}

	const filmId = extractIdFromUrl(film && film.url || '');
	const filmUrl = generatePath(Routes.FILM_DETAIL, { filmId });

	return (
		<ListItem
			loading={loading}
			name={film && film.title}
			detailsUrl={filmUrl}
		/>
	)
};

export default ListItemFilm;
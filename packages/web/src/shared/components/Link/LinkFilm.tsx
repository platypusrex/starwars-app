import * as React from 'react';
import { generatePath, Link, LinkProps } from 'react-router-dom';
import { Film } from '../../types/generated';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';

interface LinkFilmProps extends Pick<LinkProps, Exclude<keyof LinkProps, 'to'>> {
	film: Film;
}

const LinkFilm: React.FC<LinkFilmProps> = ({ film, ...linkProps }) =>
	<Link
		to={generatePath(Routes.FILM_DETAIL, { filmId: extractIdFromUrl(film.url) })}
		{...linkProps}
	/>;

export default LinkFilm;
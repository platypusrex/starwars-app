import * as React from 'react';
import { generatePath, Link, LinkProps } from 'react-router-dom';
import { Starship } from '../../types/generated';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';

interface LinkStarshipProps extends Pick<LinkProps, Exclude<keyof LinkProps, 'to'>> {
	starship: Starship;
}

const LinkStarship: React.FC<LinkStarshipProps> = ({ starship, ...linkProps }) =>
	<Link
		to={generatePath(Routes.STARSHIP_DETAIL, { starshipId: extractIdFromUrl(starship.url) })}
		{...linkProps}
	/>;

export default LinkStarship;
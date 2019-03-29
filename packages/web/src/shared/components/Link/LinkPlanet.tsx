import * as React from 'react';
import { generatePath, Link, LinkProps } from 'react-router-dom';
import { Planet } from '../../types/generated';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';

interface LinkPlanetProps extends Pick<LinkProps, Exclude<keyof LinkProps, 'to'>> {
	planet: Planet;
}

const LinkPlanet: React.FC<LinkPlanetProps> = ({ planet, ...linkProps }) =>
	<Link
		to={generatePath(Routes.PLANET_DETAIL, { planetId: extractIdFromUrl(planet.url) })}
		{...linkProps}
	/>;

export default LinkPlanet;
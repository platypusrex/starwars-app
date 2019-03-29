import * as React from 'react';
import { generatePath, Link, LinkProps } from 'react-router-dom';
import { Specie } from '../../types/generated';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';

interface LinkSpecieProps extends Pick<LinkProps, Exclude<keyof LinkProps, 'to'>> {
	specie: Specie;
}

const LinkCharacter: React.FC<LinkSpecieProps> = ({ specie, ...linkProps }) =>
	<Link
		to={generatePath(Routes.SPECIES_DETAIL, { specieId: extractIdFromUrl(specie.url) })}
		{...linkProps}
	/>;

export default LinkCharacter;
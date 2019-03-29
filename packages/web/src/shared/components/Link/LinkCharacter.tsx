import * as React from 'react';
import { generatePath, Link, LinkProps } from 'react-router-dom';
import { Character } from '../../types/generated';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';

interface LinkCharacterProps extends Pick<LinkProps, Exclude<keyof LinkProps, 'to'>> {
	character: Character;
}

const LinkCharacter: React.FC<LinkCharacterProps> = ({ character, ...linkProps }) =>
	<Link
		to={generatePath(Routes.CHARACTER_DETAIL, { characterId: extractIdFromUrl(character.url) })}
		{...linkProps}
	/>;

export default LinkCharacter;
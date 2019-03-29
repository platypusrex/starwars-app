import * as React from 'react';
import { ScrollCard } from './ScrollCard';
import { Stat } from '../Stat';
import { Link } from '../Link';
import { CardProps } from 'antd/lib/card';
import { Character } from '../../types/generated';
import CardMeta from './CardMeta';

interface CharacterCardProps extends CardProps {
	character?: Character;
	loading?: boolean;
}

const CardCharacter: React.FC<CharacterCardProps> = ({ character, loading, ...cardProps }) => {
	return (
		<ScrollCard loading={loading} {...cardProps}>
			{character &&
			<>
				<CardMeta title={character.name}/>

				<Stat.Character character={character}/>

				<Link.Character character={character}>
					View details
				</Link.Character>
			</>}
		</ScrollCard>
	);
};

export default CardCharacter;
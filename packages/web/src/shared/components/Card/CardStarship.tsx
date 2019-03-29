import * as React from 'react';
import { CardProps } from 'antd/lib/card';
import { ScrollCard } from './ScrollCard';
import { Stat } from '../Stat';
import { Link } from '../Link';
import { Starship } from '../../types/generated';
import CardMeta from './CardMeta';

interface StarshipCardProps extends CardProps {
	starship?: Starship;
	loading?: boolean;
}

const CardStarship: React.FC<StarshipCardProps> = ({ starship, loading, ...cardProps }) => {
	return (
		<ScrollCard loading={loading} {...cardProps}>
			{starship &&
			<>
				<CardMeta title={starship.name}/>

				<Stat.Starship starship={starship}/>

				<Link.Starship starship={starship}>
					View details
				</Link.Starship>
			</>}
		</ScrollCard>
	);
};

export default CardStarship;
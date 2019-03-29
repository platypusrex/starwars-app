import * as React from 'react';
import { CardProps } from 'antd/lib/card';
import { Stat } from '../Stat';
import { ScrollCard } from './ScrollCard';
import { Link } from '../Link';
import { Specie } from '../../types/generated';
import CardMeta from './CardMeta';

interface SpecieCardProps extends CardProps {
	specie?: Specie;
	loading?: boolean;
}

const CardSpecie: React.FC<SpecieCardProps> = ({ specie, loading, ...cardProps }) => {
	return (
		<ScrollCard loading={loading} {...cardProps}>
			{specie &&
			<>
				<CardMeta title={specie.name}/>

				<Stat.Specie specie={specie}/>

				<Link.Specie specie={specie}>
					View details
				</Link.Specie>
			</>}
		</ScrollCard>
	);
};

export default CardSpecie;
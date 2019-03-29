import * as React from 'react';
import { CardProps } from 'antd/lib/card';
import { generatePath, Link } from 'react-router-dom';
import { Stat } from '../Stat';
import { ScrollCard } from './ScrollCard';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { Planet } from '../../types/generated';
import CardMeta from './CardMeta';

interface PlanetCardProps extends CardProps{
	planet?: Planet;
	loading?: boolean;
}

const CardPlanet: React.FC<PlanetCardProps> = ({ planet, loading, ...cardProps }) => {
	return (
		<ScrollCard loading={loading} {...cardProps}>
			{planet &&
			<>
				<CardMeta title={planet.name}/>

				<Stat.Planet planet={planet}/>

				<Link to={generatePath(Routes.PLANET_DETAIL, { planetId: extractIdFromUrl(planet.url) })}>
					View details
				</Link>
			</>}
		</ScrollCard>
	);
};

export default CardPlanet;
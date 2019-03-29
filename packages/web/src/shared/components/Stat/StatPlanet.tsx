import * as React from 'react';
import { Stat } from './index';
import { Planet } from '../../types/generated';
import { statList } from '../../utils/statsUtils';

interface StatPlanetProps {
	planet: Planet;
}

const StatPlanet: React.FC<StatPlanetProps> = ({ planet }) => {
	const planetStats = statList.planet(planet);

	return (
		<Stat.Group>
			{planetStats.map((stat, i) =>
				<Stat.Item key={i} label={stat.label} stat={stat.stat}/>
			)}
		</Stat.Group>
	);
};

export default StatPlanet;
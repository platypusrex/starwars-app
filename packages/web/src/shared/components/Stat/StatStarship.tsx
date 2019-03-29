import * as React from 'react';
import { Stat } from './index';
import { Starship } from '../../types/generated';
import { statList } from '../../utils/statsUtils';

interface StatStarshipProps {
	starship: Starship
}

const StatStarship: React.FC<StatStarshipProps> = ({ starship }) => {
	const starshipStats = statList.starship(starship);

	return (
		<Stat.Group>
			{starshipStats.map((stat, i) =>
				<Stat.Item key={i} label={stat.label} stat={stat.stat}/>
			)}
		</Stat.Group>
	);
};

export default StatStarship;
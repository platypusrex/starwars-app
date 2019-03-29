import * as React from 'react';
import { Stat } from './index';
import { Specie } from '../../types/generated';
import { statList } from '../../utils/statsUtils';

interface StatSpecieProps {
	specie: Specie
}

const StatSpecie: React.FC<StatSpecieProps> = ({ specie }) => {
	const specieStats = statList.specie(specie);

	return (
		<Stat.Group>
			{specieStats.map((stat, i) =>
				<Stat.Item key={i} label={stat.label} stat={stat.stat}/>
			)}
		</Stat.Group>
	);
};

export default StatSpecie;
import * as React from 'react';
import { Stat } from './index';
import { Character } from '../../types/generated';
import { statList } from '../../utils/statsUtils';

interface StatCharacterProps {
	character: Character
}

const StatCharacter: React.FC<StatCharacterProps> = ({ character }) => {
	const characterStats = statList.character(character);

	return (
		<Stat.Group>
			{characterStats.map((stat, i) =>
				<Stat.Item key={i} label={stat.label} stat={stat.stat}/>)
			}
		</Stat.Group>
	);
};

export default StatCharacter;
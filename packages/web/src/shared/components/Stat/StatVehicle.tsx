import * as React from 'react';
import { Stat } from './index';
import { Vehicle } from '../../types/generated';
import { statList } from '../../utils/statsUtils';

interface StatVehicleProps {
	vehicle: Vehicle
}

const StatVehicle: React.FC<StatVehicleProps> = ({ vehicle }) => {
	const vehicleStats = statList.vehicle(vehicle);

	return (
		<Stat.Group>
			{vehicleStats.map((stat, i) =>
				<Stat.Item key={i} label={stat.label} stat={stat.stat}/>
			)}
		</Stat.Group>
	);
};

export default StatVehicle;
import * as React from 'react';
import { CardProps } from 'antd/lib/card';
import { ScrollCard } from './ScrollCard';
import { Stat } from '../Stat';
import { Link } from '../Link';
import { Vehicle } from '../../types/generated';
import CardMeta from './CardMeta';

interface VehicleCardProps extends CardProps {
	vehicle?: Vehicle;
	loading?: boolean;
}

const CardVehicle: React.FC<VehicleCardProps> = ({ vehicle, loading, ...cardProps }) => {
	return (
		<ScrollCard loading={loading} {...cardProps}>
			{vehicle &&
			<>
				<CardMeta title={vehicle.name}/>

				<Stat.Vehicle vehicle={vehicle}/>

				<Link.Vehicle vehicle={vehicle}>
					View details
				</Link.Vehicle>
			</>}
		</ScrollCard>
	);
};

export default CardVehicle;
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Empty } from 'antd';
import { Header } from '../../shared/components/Header';
import { List } from '../../shared/components/List';
import { useVehicleById } from '../../shared/hooks/api/vehicleHooks';
import { statList } from '../../shared/utils/statsUtils';

type Props = RouteComponentProps<{vehicleId: string}>;

export const VehicleDetail: React.FC<Props> = ({ match: { params } }) => {
	const vehicleId = parseInt(params.vehicleId, 10);
	const { vehicle, error } = useVehicleById(vehicleId, true);

	if (error) {
		return <Empty description={error.message}/>;
	}

	if (!vehicle) {
		return null;
	}

	return (
		<>
			<Header.PageStats
				title={vehicle.name}
				subTitle={`A detailed view of the vehicle, ${vehicle.name}.`}
				listTitle="Vehicle Stats"
				statList={statList.vehicle(vehicle)}
			/>

			<List.Group
				films={vehicle.films}
				characters={vehicle.pilots}
			/>
		</>
	);
};
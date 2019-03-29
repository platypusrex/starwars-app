import * as React from 'react';
import { useVehicleById } from '../../hooks/api/vehicleHooks';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';
import { generatePath } from 'react-router';
import { Routes } from '../../constants/routes';
import ListItem, { ListItemIdProps } from './ListItem';

const ListItemVehicle: React.FC<ListItemIdProps> = ({ id }) => {
	const { vehicle, loading } = useVehicleById(id);

	if (!vehicle && !loading) {
		return null;
	}

	const vehicleId = extractIdFromUrl(vehicle && vehicle.url || '');
	const vehicleUrl = generatePath(Routes.VEHICLE_DETAIL, { vehicleId });

	return (
		<ListItem
			loading={loading}
			name={vehicle && vehicle.name}
			detailsUrl={vehicleUrl}
		/>
	)
};

export default ListItemVehicle;
import * as React from 'react';
import { generatePath, Link, LinkProps } from 'react-router-dom';
import { Vehicle } from '../../types/generated';
import { Routes } from '../../constants/routes';
import { extractIdFromUrl } from '../../utils/extractIdFromUrl';

interface LinkVehicleProps extends Pick<LinkProps, Exclude<keyof LinkProps, 'to'>> {
	vehicle: Vehicle;
}

const LinkVehicle: React.FC<LinkVehicleProps> = ({ vehicle, ...linkProps }) =>
	<Link
		to={generatePath(Routes.VEHICLE_DETAIL, { vehicleId: extractIdFromUrl(vehicle.url) })}
		{...linkProps}
	/>;

export default LinkVehicle;
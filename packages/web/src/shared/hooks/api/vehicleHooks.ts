import { useQuery, QueryHookResult } from 'react-apollo-hooks';
import { vehicleByIdQuery } from '../../../api/vehicles/VehicleByIdQuery';
import {
	Vehicle,
	VehicleByIdQuery,
	VehicleByIdQueryVariables
} from '../../types/generated';
import { useLoading } from '../useLoading';

type VehicleByIdResult = QueryHookResult<VehicleByIdQuery, VehicleByIdQueryVariables>;
interface UseVehicleById extends VehicleByIdResult {
	vehicle?: Vehicle;
}

export function useVehicleById (vehicleId: number, addLoadingIndicator?: boolean): UseVehicleById {
	const { ...props } = useQuery<VehicleByIdQuery, VehicleByIdQueryVariables>(vehicleByIdQuery, {
		variables: { vehicleId }
	});
	const data = props.data;

	if (addLoadingIndicator) {
		useLoading(props.loading);
	}

	const vehicle =
		data &&
		data.getVehicleById;

	return { vehicle, ...props };
}
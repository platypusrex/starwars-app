import { useQuery, QueryHookResult } from 'react-apollo-hooks';
import { planetByIdQuery } from '../../../api/planets/PlanetByIdQuery';
import {
	Planet,
	PlanetByIdQuery,
	PlanetByIdQueryVariables
} from '../../types/generated';
import { useLoading } from '../useLoading';

type PlanetByIdResult = QueryHookResult<PlanetByIdQuery, PlanetByIdQueryVariables>;
interface UsePlanetById extends PlanetByIdResult {
	planet?: Planet;
}

export function usePlanetById (planetId: number, addLoadingIndicator?: boolean): UsePlanetById {
	const { ...props } = useQuery<PlanetByIdQuery, PlanetByIdQueryVariables>(planetByIdQuery, {
		variables: { planetId }
	});
	const data = props.data;

	if (addLoadingIndicator) {
		useLoading(props.loading);
	}

	const planet =
		data &&
		data.getPlanetById;

	return { planet, ...props };
}
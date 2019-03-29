import { useQuery, QueryHookResult } from 'react-apollo-hooks';
import { starshipByIdQuery } from '../../../api/starships/StarshipByIdQuery';
import {
	Starship,
	StarshipByIdQuery,
	StarshipByIdQueryVariables
} from '../../types/generated';
import { useLoading } from '../useLoading';

type StarshipByIdResult = QueryHookResult<StarshipByIdQuery, StarshipByIdQueryVariables>;
interface UseStarshipById extends StarshipByIdResult {
	starship?: Starship;
}

export function useStarshipById (starshipId: number, addLoadingIndicator?: boolean): UseStarshipById {
	const { ...props } = useQuery<StarshipByIdQuery, StarshipByIdQueryVariables>(starshipByIdQuery, {
		variables: { starshipId }
	});
	const data = props.data;

	if (addLoadingIndicator) {
		useLoading(props.loading);
	}

	const starship =
		data &&
		data.getStarshipById;

	return { starship, ...props };
}
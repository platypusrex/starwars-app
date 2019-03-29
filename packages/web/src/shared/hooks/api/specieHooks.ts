import { useQuery, QueryHookResult } from 'react-apollo-hooks';
import { specieByIdQuery } from '../../../api/species/SpecieByIdQuery';
import {
	Specie,
	SpecieByIdQuery,
	SpecieByIdQueryVariables
} from '../../types/generated';
import { useLoading } from '../useLoading';

type SpecieByIdResult = QueryHookResult<SpecieByIdQuery, SpecieByIdQueryVariables>;
interface UseSpecieById extends SpecieByIdResult {
	specie?: Specie;
}

export function useSpecieById (specieId: number, addLoadingIndicator?: boolean): UseSpecieById {
	const { ...props }= useQuery<SpecieByIdQuery, SpecieByIdQueryVariables>(specieByIdQuery, {
		variables: { specieId }
	});
	const data = props.data;

	if (addLoadingIndicator) {
		useLoading(props.loading);
	}

	const specie =
		data &&
		data.getSpecieById;

	return { specie, ...props };
}
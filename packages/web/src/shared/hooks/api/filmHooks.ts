import { QueryHookResult, useQuery } from 'react-apollo-hooks';
import { filmsQuery } from '../../../api/films/FilmsQuery';
import { filmByIdQuery } from '../../../api/films/FilmByIdQuery';
import { Film, FilmByIdQuery, FilmByIdQueryVariables, FilmsQuery } from '../../types/generated';
import { useLoading } from '../useLoading';

type FilmsQueryResult = QueryHookResult<FilmsQuery, {}>;
interface UseFilms extends FilmsQueryResult {
	films: Film[];
}

export function useFilms (): UseFilms {
	const { ...props } = useQuery<FilmsQuery, {}>(filmsQuery);
	const data = props.data;

	const films =
		data &&
		data.getFilms &&
		data.getFilms.results &&
		data.getFilms.results.sort((a, b) => a.episode_id - b.episode_id) || [];

	return { films,  ...props };
}

type FilmByIdQueryResult = QueryHookResult<FilmByIdQuery, FilmByIdQueryVariables>;
interface UseFilmById extends FilmByIdQueryResult {
	film?: Film;
}

export function useFilmById (filmId: number, addLoadingIndicator?: boolean): UseFilmById {
	const { ...props }= useQuery<FilmByIdQuery, FilmByIdQueryVariables>(filmByIdQuery, {
		variables: { filmId }
	});

	if (addLoadingIndicator) {
		useLoading(props.loading);
	}

	const data = props.data;

	const film =
		data &&
		data.getFilmById;

	return { film, ...props };
}
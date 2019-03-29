import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Header } from '../../shared/components/Header';
// import { HorizontalScroll } from '../../shared/components/HorizontalScroll';
import HorizontalScroll from '../../shared/components/HorizontalScroll/HorizontalScrollGroup'
import { Card } from '../../shared/components/Card';
import { NotFound } from '../../shared/components/NotFound';
import { useFilmById } from '../../shared/hooks/api/filmHooks';
import { extractIdFromUrl } from '../../shared/utils/extractIdFromUrl';
import { useCharacterById } from '../../shared/hooks/api/characterHooks';

type Props = RouteComponentProps<{filmId: string}>;

export const FilmDetail: React.FC<Props> = ({ match: { params } }) => {
	const filmId = parseInt(params.filmId, 10);
	const { film, error, loading } = useFilmById(filmId, true);

	if (error) {
		return <NotFound message={error.message}/>;
	}

	if (!film) {
		return loading ? null : <NotFound type="404" message="Sorry dude. Nothing to see here."/>;
	}

	return (
		<>
			<Header.Page title={film.title} subTitle={film.opening_crawl}/>

			<HorizontalScroll
				characters={film.characters}
				species={film.species}
				planets={film.planets}
				starships={film.starships}
				vehicles={film.vehicles}
			/>
		</>
	);
};
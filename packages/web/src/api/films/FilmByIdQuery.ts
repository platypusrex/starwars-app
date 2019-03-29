import gql from 'graphql-tag';
import { FilmFragment } from '../fragments/filmFragment';

export const filmByIdQuery = gql`
  query FilmByIdQuery ($filmId: Int!) {
    getFilmById (filmId: $filmId) @rest(type: "Film", path: "/films/{args.filmId}") {
			...Film
    }
  }
  ${FilmFragment}
`;
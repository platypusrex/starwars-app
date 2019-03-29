import gql from 'graphql-tag';
import { FilmFragment } from '../fragments/filmFragment';

export const filmsQuery = gql`
	query FilmsQuery {
    getFilms @rest(type: "FilmsPayload", path: "/films") {
			results @type(name: "Film") {
        ...Film	
			}
		}
  }
	${FilmFragment}
`;
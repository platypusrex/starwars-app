import gql from 'graphql-tag';
import { StarshipFragment } from '../fragments/starshipFragment';

export const starshipByIdQuery = gql`
  query StarshipByIdQuery ($starshipId: Int!) {
    getStarshipById (starshipId: $starshipId) @rest(type: "Starship", path: "/starships/{args.starshipId}") {
      ...Starship
    }
  }
  ${StarshipFragment}
`;
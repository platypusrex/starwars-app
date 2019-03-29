import gql from 'graphql-tag';
import { PlanetFragment } from '../fragments/planetFragment';

export const planetByIdQuery = gql`
  query PlanetByIdQuery ($planetId: Int!) {
    getPlanetById (planetId: $planetId) @rest(type: "Planet", path: "/planets/{args.planetId}") {
      ...Planet
    }
  }
  ${PlanetFragment}
`;
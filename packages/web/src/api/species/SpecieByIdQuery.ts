import gql from 'graphql-tag';
import { SpecieFragment } from '../fragments/specieFragment';

export const specieByIdQuery = gql`
  query SpecieByIdQuery ($specieId: Int!) {
    getSpecieById (specieId: $specieId) @rest(type: "Specie", path: "/species/{args.specieId}") {
      ...Specie
    }
  }
  ${SpecieFragment}
`;
import gql from 'graphql-tag';
import { CharacterFragment } from '../fragments/characterFragment';

export const characterByIdQuery = gql`
  query CharacterByIdQuery ($characterId: Int!) {
    getCharacterById (characterId: $characterId) @rest(type: "Character", path: "/people/{args.characterId}") {
      ...Character
    }
  }
  ${CharacterFragment}
`;
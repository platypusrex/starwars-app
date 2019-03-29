import gql from 'graphql-tag';

export const SpecieFragment = gql`
  fragment Specie on Specie {
    average_height
    average_lifespan
    classification
    created
    designation
    edited
    eye_colors
    hair_colors
    homeworld
    language
    name
    people
    films
    skin_colors
    url
  }
`;
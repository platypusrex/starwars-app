import gql from 'graphql-tag';

export const PlanetFragment = gql`
  fragment Planet on Planet {
    climate
    created
    diameter
    edited
    films
    gravity
    name
    orbital_period
    population
    residents
    rotation_period
    surface_water
    terrain
    url
  }
`;
import gql from 'graphql-tag';

export const StarshipFragment = gql`
  fragment Starship on Starship {
    MGLT
    cargo_capacity
    consumables
    cost_in_credits
    created
    crew
    edited
    hyperdrive_rating
    length
    manufacturer
    max_atmosphering_speed
    model
    name
    passengers
    films
    pilots
    starship_class
    url
  }
`;
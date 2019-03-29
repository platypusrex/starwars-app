import gql from 'graphql-tag';

export const VehicleFragment = gql`
  fragment Vehicle on Vehicle {
    cargo_capacity
    consumables
    cost_in_credits
    created
    crew
    edited
    length
    manufacturer
    max_atmosphering_speed
    model
    name
    passengers
    pilots
    films
    url
    vehicle_class
  }
`;
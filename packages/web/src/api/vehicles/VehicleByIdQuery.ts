import gql from 'graphql-tag';
import { VehicleFragment } from '../fragments/vehicleFragment';

export const vehicleByIdQuery = gql`
  query VehicleByIdQuery ($vehicleId: Int!) {
    getVehicleById (vehicleId: $vehicleId) @rest(type: "Vehicle", path: "/vehicles/{args.vehicleId}") {
      ...Vehicle
    }
  }
  ${VehicleFragment}
`;
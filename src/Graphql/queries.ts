import { gql } from "@apollo/client";

export const GET_TEMPERATURE = gql`
  query getTemperature($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        temperature {
          actual
        }
      }
    }
  }
`;

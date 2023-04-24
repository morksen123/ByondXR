import { gql } from "@apollo/client";

export const GET_SHOWROOM = gql`
  query($name: String) {
    getShowroom(name: $name) {
      _id
      title
      boards {
        id
        image
        title
      }
    }
  }
`;

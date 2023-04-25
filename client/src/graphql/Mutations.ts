import { gql } from "@apollo/client";

export const ADD_USER_ACTIVITY = gql`
  mutation($input: UserActivityInput) {
    addUserActivity(input: $input) {
      timestamp
      page
      entity_id
      event_type
      data {
        board_id
      }
    }
  }
`;

const typeDefs = `#graphql

  type Showroom {
    _id: ID
    title: String
    boards: [Board]
  }

  type Board {
    id: ID
    title: String
    image: String
  }

  type Query {
    getShowroom(name: String): Showroom
  }

  input UserActivityInput {
    timestamp: String
    page: String
    entity_id: ID
    event_type: String
    data: UserActivityDataInput
  }

  input UserActivityDataInput {
    board_id: ID
  }

  type UserActivityData {
    timestamp: String
    page: String
    entity_id: ID
    event_type: String
    data: UserActivityDataOutput
  }

  type UserActivityDataOutput {
    board_id: ID
  }

  type Mutation {
    addUserActivity(input: UserActivityInput): UserActivityData
  }
`;

export default typeDefs;

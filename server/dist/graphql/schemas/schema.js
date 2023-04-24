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
`;
export default typeDefs;

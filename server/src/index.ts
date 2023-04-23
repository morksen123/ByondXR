// The ApolloServer constructor requires two parameters: your schema

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";

// import { typeDefs } from "./graphql/schemas/showroomSchema";
// import { resolvers } from "./graphql/resolvers/showroomResolver";

const MONGODB =
  "mongodb+srv://morksen123:coorJRuCoblOEYI6@cluster0.dotppga.mongodb.net/byondxr";

const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};

// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch(() => {
    console.log("MongoDB connection fail");
  });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

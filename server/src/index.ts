import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import typeDefs from "../dist/graphql/schemas/schema.js";
import resolvers from "../dist/graphql/resolvers/resolver.js";

const MONGODB =
"mongodb+srv://morksen123:coorJRuCoblOEYI6@cluster0.dotppga.mongodb.net/byondxr";

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



// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
// import express from 'express';
// import http from 'http';
// // import { json } from 'body-parser';
// import pkg from 'body-parser';
// const { json } = pkg;
// // import { typeDefs, resolvers } from './schema';

// import cors from 'cors';


// const app = express();
// const httpServer = http.createServer(app);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

// await server.start();

// app.use(cors())

// app.use(
//   '/graphql',
  
//   // cors<cors.CorsRequest>({ origin: ['http://localhost:3003', 'http://localhost:3000'] }),
  
//   json(),
//   expressMiddleware(server),
// );

// await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
// console.log(`🚀 Server ready at http://localhost:4000`);


// mongoose
//   .connect(MONGODB)
//   .then(() => {
//     console.log("MongoDB Connection Successful");
//   })
//   .catch(() => {
//     console.log("MongoDB connection fail");
//   });
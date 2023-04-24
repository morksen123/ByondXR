import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import typeDefs from "../dist/graphql/schemas/schema.js";
import resolvers from "../dist/graphql/resolvers/resolver.js";
const MONGODB = "mongodb+srv://morksen123:coorJRuCoblOEYI6@cluster0.dotppga.mongodb.net/byondxr";
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

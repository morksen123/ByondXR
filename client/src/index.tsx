import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ShowroomProvider } from "./contexts/showRoomContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <ShowroomProvider>
      <App />
    </ShowroomProvider>
  </ApolloProvider>
);

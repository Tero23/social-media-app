require("dotenv").config();
const colors = require("colors");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const connectDB = require("./db/connect");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

connectDB();

server
  .listen({ port: 5000 })
  .then((res) => console.log(`Server running at ${res.url}`));

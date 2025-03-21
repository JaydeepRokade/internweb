// Import required libraries
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables

// Connect to MongoD
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define Mongoose Schema and Model for Pro
const profileSchema = new mongoose.Schema({
  name: String,
  photoUrl: String,
  description: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
});
const Profile = mongoose.model('Profile', profileSchema);

// Define GraphQL Schema
const typeDefs = gql`
  type Profile {
    id: ID!
    name: String!
    photoUrl: String!
    description: String!
    address: String!
    coordinates: Coordinates
  }

  type Coordinates {
    lat: Float
    lng: Float
  }

  type Query {
    profiles: [Profile]
    profile(id: ID!): Profile
  }

  type Mutation {
    addProfile(
      name: String!
      photoUrl: String!
      description: String!
      address: String!
      coordinates: InputCoordinates
    ): Profile

    updateProfile(
      id: ID!
      name: String
      photoUrl: String
      description: String
      address: String
      coordinates: InputCoordinates
    ): Profile

    deleteProfile(id: ID!): Boolean
  }

  input InputCoordinates {
    lat: Float
    lng: Float
  }
`;

// Define GraphQL Resolvers
const resolvers = {
  Query: {
    profiles: async () => await Profile.find(),
    profile: async (_, { id }) => await Profile.findById(id),
  },
  Mutation: {
    addProfile: async (_, { name, photoUrl, description, address, coordinates }) => {
      const newProfile = new Profile({ name, photoUrl, description, address, coordinates });
      return await newProfile.save();
    },
    updateProfile: async (_, { id, ...updates }) => {
      return await Profile.findByIdAndUpdate(id, updates, { new: true });
    },
    deleteProfile: async (_, { id }) => {
      const result = await Profile.findByIdAndDelete(id);
      return result ? true : false;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

// Apply Apollo Middleware to Express
server.start().then(() => {
  server.applyMiddleware({ app });
  
  // Basic Route for Testing Express
  app.get('/', (req, res) => {
    res.send('Hello World! GraphQL is running at /graphql');
  });

  // Start the Server
  const port = 3000;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    console.log(`🚀 GraphQL endpoint at http://localhost:${port}${server.graphqlPath}`);
  });
});

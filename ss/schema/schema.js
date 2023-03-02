const User = require('../db/models/User'); 
const Payment = require('../db/models/Payment'); 
const Click = require('../db/models/Click'); 
const Offer = require('../db/models/Offer');  

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLInt,
  } = require('graphql');

  
// UserType
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id : { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLInt },
        confirmPassword: { type: GraphQLInt },
        phoneNumber: { type: GraphQLInt }
    }),
});

// OfferType
const OfferType = new GraphQLObjectType({
    name: "Offer",
    field: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        category: { type: GraphQLString },
        device: { type: GraphQLString },
        payout: { type: GraphQLInt },
        date: { type: GraphQLString },
        estatus: { type: GraphQLString }
    })
})
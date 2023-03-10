const User = require('../db/models/User'); 
const Payment = require('../db/models/Payment');
const Offer = require('../db/models/Offer');   
// const Click = require('../db/models/Click'); 

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLInt,
    GraphQLScalarType,
  } = require('graphql');

  
// UserType
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id : { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        confirmPassword: { type: GraphQLString },
        phoneNumber: { type: GraphQLString }
    }),
});

// OfferType
const OfferType = new GraphQLObjectType({
    name: "Offer",
    field: () => ({
        id: { type: GraphQLID },
        username: { 
            type: UserType,
            resolve(parent, args){
                User.findById(parent.id);
                return User.username;
            }
         },
         email: { 
            type: UserType,
            resolve(parent, args){
                 User.findById(parent.id);
                 return User.email;
            }
         },
        category: { type: GraphQLString },
        device: { type: GraphQLString },
        payout: { type: GraphQLInt },
        date: { type: GraphQLString },
        status: { type: GraphQLString }
    }),
});

//PaymentType
const PaymentType = new GraphQLObjectType({
    name: "Payment",
    fields: () => ({
        user_id:  { type: GraphQLID },
        email: {
            type: OfferType,
            resolve(parent, args){
                Offer.findById(parent.user_id);
                return Offer.email;
            }
        },
        paymentEmail: { type: GraphQLString },
        totalOffers: { 
            type: OfferType,
            resolve(parent, args){
                Offer.findById(parent.user_id);
                return Offer.count(`${parent.user_id}`);
            }
        },
        totalPay: { 
            type: OfferType,
            resolve(parent, args){
                Offer.findById(parent.user_id);
                Offer.find({payout: `${parent.user_id}`})
                .then(amount=>{
         
                      const total = amount.reduce((accumulator, object) => {
                        // return accumulator + object.price;
                      }, 0); 
                })
                .catch(err => {
                    console.log(`This is an Error on the User's TotalPayout ${err}`);
                    return;
                });
            }
        },
        paidStatus: { type: GraphQLString },
        date: { type: GraphQLString },
    }),
});







// MUTATIONS SECTION
const Mutation = new GraphQLObjectType({
    name: "mutations",
    fields: {
        // Add a New User
        addUser: {
            type: UserType,
            args: {
                username : { type: GraphQLNonNull(GraphQLString) },
                email : { type: GraphQLNonNull(GraphQLString) },
                password : { type: GraphQLNonNull(GraphQLString) },
                confirmPassword : { type: GraphQLNonNull(GraphQLString) },
                phone : { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args){
                const user = new User({
                    username: args.username,
                    email: args.username,
                    password: args.username,
                    confirmPassword: args.username,
                    phone: args.username,
                });

                return user.save();
            },
        },


        // Delete a User
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                return User.findByIdAndRemove(args.id);
            },
        },


        // add an Offer
        addOffer: {
            type: OfferType,
            args: {
                id : { type: GraphQLNonNull(GraphQLID) },
                username : { type: GraphQLNonNull(GraphQLString) },
                email : { type: GraphQLNonNull(GraphQLString) },
                category : { type: GraphQLNonNull(GraphQLString) },
                device: { type: GraphQLNonNull(GraphQLString) },
                payout : { type: GraphQLNonNull(GraphQLInt) },
                date : { type: GraphQLNonNull(GraphQLString) },
                status : { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args){
                const offer = new Offer({
                    id: args.id,
                    username: args.username,
                    email: args.email,
                    category: args.category,
                    device: args.device,
                    payout: args.payout,
                    date: args.date,
                    status: args.status,
                })
                r
            }
        }
    },
});
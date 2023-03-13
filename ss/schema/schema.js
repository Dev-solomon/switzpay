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
    GraphQLFloat,
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
        phone: { type: GraphQLString }
    }),
});

// OfferType
const OfferType = new GraphQLObjectType({
    name: "Offer",
    fields: () => ({
        id: { type: GraphQLString },
        username: { 
            type: UserType,
            resolve(parent, args){
              return  User.findById(parent.id); 
            }
         },
         email: { 
            type: UserType,
            resolve(parent, args){
                return User.findById(parent.id); 
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
        user_id:  { type: GraphQLString },
        email: {
            type: OfferType,
            resolve(parent, args){
              return Offer.findOne({id: `${parent.user_id}`}).exec();
            }
        },
        paymentEmail: { type: GraphQLString },
        totalOffers: () => {   
               return Offer.find({id: `${parent.user_id}`}).count(); 
            //     return Offer.countDocuments({id: `${parent.user_id}`}, function(err, c) {
            //         console.log('Count is ' + c); 
            //    }); 
            
        },
        totalPay: { 
            type: OfferType,
            resolve(parent, args){
                Offer.findById(parent.user_id);
                Offer.find({payout: `${parent.user_id}`})
                .then(amount=>{
         
                      const total = amount.reduce((accumulator, object) => {
                        return accumulator + object.payout;
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


const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
            },
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
              return User.findById(args.id);
            },
          },
        offers: {
            type: new GraphQLList(OfferType),
            resolve(parent, args){
                return Offer.find();
            },
        },
        offer: {
            type: OfferType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Offer.findById(args.id);
            }
        },
        payments: {
            type: new GraphQLList(PaymentType),
            resolve(parent, args){
                return Payment.find();
            }
        },
        payment: {
            type: PaymentType,
            args: { user_id: { type: GraphQLID } },
            resolve(parent, args){
                return Payment.findById(args.user_id);;
            },
        },
    }
})






// ##################################################################################################################################





// MUTATIONS SECTION
const mutation = new GraphQLObjectType({
    name: "mutations",
    fields: {
        // Add a New User
        addUser: {
            type: UserType,
            args: {
                username : { type: new GraphQLNonNull(GraphQLString) },
                email : { type: new GraphQLNonNull(GraphQLString) },
                password : { type: new GraphQLNonNull(GraphQLString) },
                confirmPassword : { type: new GraphQLNonNull(GraphQLString) },
                phone : { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args){
                const user = new User({
                    username: args.username,
                    email: args.email,
                    password: args.password,
                    confirmPassword: args.confirmPassword,
                    phone: args.phone,
                });

                return user.save();
            },
        },


        // Delete a User
        deleteUser: {
            type: UserType,
            args: {
                id: { type:new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                return User.findByIdAndRemove(args.id);
            },
        },


        // add an Offer
        addOffer: {
            type: OfferType,
            args: {
                id : { type:new GraphQLNonNull(GraphQLString) },
                username : { type:new GraphQLNonNull(GraphQLString) },
                email : { type:new GraphQLNonNull(GraphQLString) },
                category : { type:new GraphQLNonNull(GraphQLString) },
                device: { type:new GraphQLNonNull(GraphQLString) },
                payout : { type:new GraphQLNonNull(GraphQLFloat) },
                date : { type:new GraphQLNonNull(GraphQLString) },
                status : { type:new GraphQLNonNull(GraphQLString) },    
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
                });
                return offer.save();            
            },
        },
        deleteOffer: {
            type: OfferType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent,args){
                Offer.find({id: args.id})
                return Offer.deleteMany();
            }
        },
        addPayment: {
            type: PaymentType,
            args: {
                user_id: { type: new GraphQLNonNull(GraphQLString) },
                paymentEmail: { type: new GraphQLNonNull(GraphQLString) },
                paidStatus: { type: new GraphQLNonNull(GraphQLString) },
                date: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                const pay = new Payment({
                    user_id: args.user_id,
                    paymentEmail:  args.paymentEmail,
                    paidStatus: args.paidStatus,
                    date: args.date
                });
                return pay.save();
            }
        },
        deletePayment: {
            type: PaymentType,
            args:  { user_id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args){
                Payment.find({user_id: args.user_id});
                return Payment.deleteMany();
            }
        }
 
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})
  
const express =  require('express'); 
require('dotenv').config();
const cors = require('cors'); 
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./db/connection');
const port = process.env.PORT || 6000;
const colors = require('colors');

const app = express(); //start running App
 

app.use(cors());

// GraphQL connector for use
// app.use(
//     '/graphql',
//     graphqlHTTP({
//       schema,
//       graphiql: process.env.NODE_ENV === 'development',
//     })
//   );
   

app.listen(port, ()=>{
    console.log(`YOUR APP IS RUNNING ON PORT::${port}`.cyan.underline.bold);
});
const express =  require('express'); 
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors'); 
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const connectDB = require('./db/connection');
const port = process.env.PORT || 8000;
const colors = require('colors');


const app = express(); //start running App
 

app.use(cors());
//log requests
app.use(morgan('tiny')); 
//json parser
app.use(express.json())

// GraphQL connector for use
app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
  );
   
  
//passing root variable
app.use('/',  require('./route'));

app.listen(port, ()=>{ 
    console.log(`YOUR APP IS RUNNING ON PORT::${port}`.cyan.underline.bold);
});
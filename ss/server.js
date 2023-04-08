const express =  require('express'); 
const morgan = require('morgan');
require('dotenv').config();
const path  = require('path');
const cors = require('cors'); 
const cookieParser = require('cookie-parser')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// eslint-disable-next-line no-unused-vars
const connectDB = require('./db/config/connection');
const port = process.env.PORT || 5000;
// eslint-disable-next-line no-unused-vars
const colors = require('colors');



const app = express(); //start running App
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "cs", "build")));


//passing root variable
app.use('/',  require('./routes')); 

// GraphQL connector for use
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
); 

// require('./routes')(app);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "cs", "build", "index.html")); 
});

app.use(cors());
//log requests
app.use(morgan('tiny')); 
//json parser
app.use(express.json())



app.listen(port, ()=>{ 
    console.log(`YOUR APP IS RUNNING ON PORT::${port}`.cyan.underline.bold);
});
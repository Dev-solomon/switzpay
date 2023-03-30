// import AppLoader  from './components/AppLoader';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'; 
import AppHome  from './pages/AppHome';   
import Login  from './components/LoginForm';
import SignUp from './components/SignForm';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Offers from './pages/Offers';
import Settings from './pages/Settings';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

const cache = new InMemoryCache({ 
  typePolicies: {
    Query: {
      fields: {
        users: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        offers: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        payments: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});


function App(){ 
  return(
    <>
     <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<SignUp />} /> 
            <Route path='/offers' element={<Offers/>} />
            <Route path='/settings' element={<Settings />} /> 
            <Route path='/admin' element={<AppHome />} /> 
          </Routes>
        </Router>
      </ApolloProvider>
    </> 
  ); 
}






export default App;


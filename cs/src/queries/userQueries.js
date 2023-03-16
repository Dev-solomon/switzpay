import { gql } from '@apollo/client';

const GET_USERS = gql`
    query getUsers{
        users{
            id
            username
            email
            password
            confirmPassword
            phone
        }
    }
`;

const GET_USER = gql`
    query getUser($id: ID!){
        user(id: $id){
            id
            username
            email
            password 
            phone
        }
    }
`;

export {
    GET_USERS,
    GET_USER
};


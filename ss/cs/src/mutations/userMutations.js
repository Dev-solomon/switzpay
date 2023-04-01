import { gql } from '@apollo/client';

const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $confirmPassword: String!, $phone: String!){
        addUser(username: $username, email: $email, password: $password, confirmPassword: $confirmPassword, phone: $phone){
            id
            username
            email 
            password
            phone
        }
    }
`;

const DELETE_USER = gql`
    mutation deleteUser($id: ID!){
        deleteUser(id: $id){
            id 
            username
            email
            phone
        }
    }
`;

export {
    ADD_USER,
    DELETE_USER
};
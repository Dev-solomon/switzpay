import { gql } from '@apollo/client';

const ADD_OFFER = gql`
    mutation AddOffer(
        $id: ID!
        $username: String!
        $email: String!
        $category: String!
        $device: String!
        $payout: Number!
        $date: String!
        $status: String!
    ) {
    addOffer(
        id: $id
        username: $username
        email: $email
        category: $category
        device: $device
        payout:  $payout
        date: $date
        status: $status
    ) {
        id
        username{
            username
        }
        email{
            email
        }
        category
        device
        payout
        date
        status
    }
  }
`;


const DELETE_OFFER = gql`
    mutation DeleteOffer($id: ID!){
        deleteOffer(id: $id){
            id
        }
    }
`;

export{
    ADD_OFFER,
    DELETE_OFFER
};
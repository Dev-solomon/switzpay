import { gql } from '@apollo/client';

const GET_OFFERS = gql`
    query getOffers{
        offers{
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

const GET_OFFER = gql`
    query getOffer($id: ID!){
        offer(id: $id){
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

export{
    GET_OFFER,
    GET_OFFERS
};
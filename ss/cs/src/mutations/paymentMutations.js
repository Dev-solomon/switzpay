import { gql } from '@apollo/client';

const ADD_PAYMENT = gql`
    mutation AddPayment(
        $user_id: ID!
        $paymentEmail: String!
        $paidStatus: String!
        $date: String!
    ){
        addPayment(user_id: $user_id, paymentEmail: $paymentEmail, paidStatus: $paidStatus, date: $date){
            user_id
            email{
                email { email }
            }
            paymentEmail
            totalOffers
            totalPay
            paidStatus
            date
        }
    }
`;


const DELETE_PAYMENT = gql`
    mutation DeletePayment($user_id: ID!){
        deletePayment(user_id: $user_id){
            user_id
        }
    }
`;

export{
    ADD_PAYMENT,
    DELETE_PAYMENT
};
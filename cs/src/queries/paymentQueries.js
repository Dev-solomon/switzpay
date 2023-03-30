import { gql } from '@apollo/client';

const GET_PAYMENTS = gql`
    query getPayments{
        payments{
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

const GET_PAYMENT = gql`
    query getPayment($user_id: ID!){
        payment(user_id: $user_id){
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

export{
    GET_PAYMENT,
    GET_PAYMENTS
};
import React from 'react';
import LoginHeader from '../components/LoginHeader';
import Filter from '../components/Filter';
import UserChat from '../components/UserChat';
import OfferDeals from '../components/OfferDeals';
import Pagination from '../components/Pagination';

function Offers() {
  return (
    <>
      <LoginHeader/>
      <Filter/>
      <OfferDeals/>
      <Pagination/>
      <UserChat/>
      
    </>
  )
}

export default Offers

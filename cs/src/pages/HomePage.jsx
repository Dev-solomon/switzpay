import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeAdvertisers from '../components/HomeAdvertisers';
import AdvertiserWorks from '../components/AdvertiserWorks';
import HomeWorkers from '../components/HomeWorkers';
import Workers from '../components/Workers';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';

export class HomePage extends Component {
  render() {
    return (
      <>
        <Header/> 
        <Hero/>
        <HomeAdvertisers/>
        <AdvertiserWorks/>
        <HomeWorkers/>
        <Workers/>
        <WhyUs/>
        <Reviews/>
        <Faqs/>
        <Footer/>
      </>
    )
  }
}

export default HomePage

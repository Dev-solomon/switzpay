import React from 'react';
import '../assets/styles/Offers.css';
import swiss from '../assets/imgs/swiss-franc.png';
import cash from '../assets/imgs/moneys.png';
import { GiCheckMark } from 'react-icons/gi';

function OfferDeals() {
  return (
    <div className='container offer-table'>
        <table class="table table-striped table-inverse table-responsive">
            <thead class="thead-inverse">
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Payout</th>
                    <th>Device Type</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Install a paypall app</td>
                    <td>Mobile Install</td>
                    <td><img src={swiss} alt="swiss-franc"/> 2.9<span className="instant"><img src={cash} alt="cash" />Instant pay</span></td>
                    <td>Andriod</td>
                    <td><span className="status mx-auto"><GiCheckMark style={{color: "green"}}/></span></td>
                </tr>
                <tr>
                    <td>answer question here</td>
                    <td>surveys</td>
                    <td><img src={swiss} alt="swiss-franc"/> 0.4</td>
                    <td>All Mobile</td>
                    <td><span className="status mx-auto">Done</span></td>
                </tr>
            </tbody>
        </table> 
    </div>
  )
}

export default OfferDeals

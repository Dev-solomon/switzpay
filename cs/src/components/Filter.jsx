import React from 'react';
import '../assets/styles/Filter.css'; 
import filter from '../assets/imgs/filter.png';

function Filter() {
  return (
    <div className='d-flex flex-column container'>
        <div className='offers-title fs-4 text-dark fw-normal'>Offers List</div>

        <div className='d-flex flex-row justify-content-evenly col-5 offers-title'>
            <p className='text-dark'>Filter<img src={filter} alt="filter" className='filter-icon' /></p> 
            <div class="form-group">
                <label for=""></label>
                <select class="select-dropdown" name="" id=""> 
                    <option selected>Type of Devices</option>
                    <option value="">All Mobile</option>
                    <option value="">IOS</option>
                    <option value="">Andriod</option>
                    <option value="">Desktop</option>
                </select>
            </div>

            <div class="form-group">
                <label for=""></label>
                <select class="select-dropdown" name="" id="">
                    <option selected>Kind of Offer</option>
                    <option value="">Surveys</option>
                    <option value="">Pin-submit</option>
                    <option value="">Mobile Install</option>
                    <option value="">CC Submission</option>
                </select>
            </div>
        </div>
      
    </div>
  )
} 

export default Filter;

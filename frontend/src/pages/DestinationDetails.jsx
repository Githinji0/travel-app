/* eslint-disable no-unused-vars */
import React from 'react';
import parisImg from "../assets/images/A1.jpeg";
import { useState, useEffect } from 'react';
import { FaLocationArrow, FaSearchLocation, FaPenNib,FaWallet } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";


const DestinationDetails = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [bookingDate, setBookingDate] = useState('');


  const handleSubmitForm = (e) => { }


  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center lg:text-3xl py-2">Destination Details</h1>
      <section>
        <div id='booking-image-box' className="max-w-6xl mx-auto px-4 bg-white rounded-lg shadow-md relative">
          <img src={parisImg} alt="Paris" className="w-full h-40 object-cover rounded-lg blur-sm " />
          <h1 className='tracking-wide absolute top-[50%]  left-[10%] text-white font-allan text-xl lg:text-5xl font-semi '>
            Discover the Magic of Paris
          </h1>
        </div>
        <div id="form-box" className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6">
          {
            isAuthenticated ? (
              <div id="booking-form-box">
                <div id="travel-details-box">
                  <div id="heading-box" className='flex gap-4 w-full items-start  p-2'>
                    <FaPenNib className='text-gray-800 inline-block ' size={22} />
                    <h1 className='text-pink-600 text-lg lg:text-xl tracking-wide border-l-2 border-pink-600 pl-2 font-bold'>Travel Details</h1>
                  </div>
                  <div id="destination-box">
                    <label className='text-gray-600 font-medium text-sm lg:text-lg'>Destination</label>
                    <div id="location-input-box" className='flex gap-4 w-full items-center mt-2 border-[1px] border-gray-300 rounded-md p-2'>
                      <IoLocationOutline size={24} className='text-pink-600 inline-block mr-1' />
                      <input type="text" placeholder='Enter your destination' className='w-full p-2 border-[1px] rounded-md focus:outline-none' />
                    </div>
                    
                  </div>
                  <input type="date" name="" id="" />
                </div>
                <div id="payment-details-box">
                  <div id="heading-box" className='flex gap-4 w-full items-start  p-2'>
                    <FaWallet className='text-gray-800 inline-block ' size={22} />
                    <h1 className='text-pink-600 text-lg lg:text-xl tracking-wide border-l-2 border-pink-600 pl-2 font-bold'>Payment Details</h1>
                  </div>

                </div>
                <div id="terms-conditions-btn-box" className='flex justify-between w-full items-center mt-4 text-sm lg:text-lg gap-3'>
                  <p className='text-sm lg:text-xl text-wrap text-gray-500'>
                    By booking this trip, you agree to our terms and conditions.
                  </p>
                  <button onClick={() => handleSubmitForm()} type="submit" className='w-[100px] h-[40px] rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-medium text-sm lg:text-base'>Book Now</button>
                </div>
              </div>
            ) : (
              <p className="text-red-600 text-center">Please create an account in to book your trip.</p>
            )
          }

        </div>
      </section>
    </div>
  );
};

export default DestinationDetails;
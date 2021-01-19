import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/Ai';
import { BiHappy } from 'react-icons/Bi';

function WhyPhonePals () {

  return (
    <div className="whyContainer">
      <h1 className="whyTitle">Why Choose Phone Pals?</h1>
      <div className="whyIcons">
        <div className="whyIcon">
          <FaRegCreditCard size={100}/>
          <h1>Save $</h1>
          ​No storefront = low overhead <br/>
          We pass the savings on to you!
          <div className="child" />
          <div className="child" />
          <div className="child" />
        </div>
        <div className="whyIcon">
          <AiOutlineFieldTime size={100}/>
          <h1>Save Time</h1>
          ​Phone repair on your time at your chosen location.<br/>
​          Repairs typically take 35 minutes.
        </div>
        <div className="whyIcon">
          <BiHappy size={100}/>
          <h1>No Headaches</h1>
          Limited Lifetime Warranty <br />
          Rated A+ with BBB
        </div>
      </div>

    </div>
  );
}

export default WhyPhonePals;
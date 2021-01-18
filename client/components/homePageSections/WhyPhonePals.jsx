import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/Ai';
import { GiNailedHead } from 'react-icons/Gi';

function WhyPhonePals () {

  return (
    <div className="whyContainer">
      <h1 className="whyTitle">Why choose phone pals?</h1>
      <div className="whyIcons">
        <div className="whyIcon">
          <FaRegCreditCard />
          <h1>Save $</h1>
          ​No storefront = low overhead <br/>
          we pass the savings on to you!
        </div>
        <div className="whyIcon">
          <AiOutlineFieldTime />
          <h1>Save Time</h1>
          ​Phone repair on your time at your chosen location.<br/>
​          Repairs typically take 35 minutes.
        </div>
        <div className="whyIcon">
          <GiNailedHead />
          <h1>Save Headaches</h1>
          Limited Lifetime Warrant <br />
          Safe and Secure repair in front of you
        </div>
      </div>

    </div>
  );
}

export default WhyPhonePals;
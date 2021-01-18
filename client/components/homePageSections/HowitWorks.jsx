import React from 'react';

function HowitWorks () {

  return (
    <div>
      <h1>How it Works</h1>
      <div className="howItWorks">
        <div className="howItWorksImage">
          <img src="https://i.imgur.com/d7Rgpfy.jpg?2"></img>
        </div>
        <div className="howItWorksSteps">
       <text> <strong>Step 1) Book Appointment <br/></strong>
                   you choose the time and location <br/><br/>
                   <strong>Step 2) Tech Arrives <br/></strong>
                    performs phone repair(typically 35  minutes) <br/><br/>
                    <strong>Step 3) You Pay<br/></strong>
                    after your device is fixed (cash, Venmo, or credit card) <br/><br/>
​                   <strong>Step 4) Bada boom bada bing! <br/></strong>
                   live your life because your phone is fixed
                   </text>
        </div>
      </div>
    </div>
  )
}

export default HowitWorks;
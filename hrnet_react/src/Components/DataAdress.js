import React, { useState } from 'react';


function AddAdress() {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
  
    const handleStreetChange = (e) => {
      setStreet(e.target.value);
    };
  
    const handleCityChange = (e) => {
      setCity(e.target.value);
    };
  
    const handleZipCodeChange = (e) => {
      setZipCode(e.target.value);
    };
  
    return (
      <div>
        <h2>Add you address</h2>
        <div>
          <label>Street</label>
          <input value={street} onChange={handleStreetChange} />
        </div>
        <div>
          <label>City</label>
          <input value={city} onChange={handleCityChange} />
        </div>
        <div>
          <label>State</label>
          {/* <input value={city} onChange={handleCityChange} /> */}
        </div>
        <div>
          <label>Zip Code</label>
          <input value={zipCode} onChange={handleZipCodeChange} />
        </div>
      </div>
    );
  }
  
  export default AddAdress;
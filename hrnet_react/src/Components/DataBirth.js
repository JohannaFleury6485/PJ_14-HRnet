import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Style/main.css'

function DateOfBirthPicker() {
    const [birthdate, setBirthdate] = useState(null);
  
    const handleBirthdateChange = (date) => {
      setBirthdate(date);
    };
  
    return (
      <div className='datepicker' aria-label="Select your date of birth">Date of Birth
      
        <DatePicker
          selected={birthdate}
          onChange={handleBirthdateChange}
            showMonthDropdown  // Activer le menu déroulant pour la sélection du mois
            showYearDropdown   // Activer le menu déroulant pour la sélection de l'année
            dropdownMode="select"
            minDate={new Date('1950-01-01')} // Limiter la date minimale autorisée à 1950-01-01
            maxDate={new Date('2010-12-31')} // Limiter la date maximale autorisée à 2010-12-31
            ariaLabel="Select your date of birth"
        />
      </div>
    );
  }
  
  export default DateOfBirthPicker;
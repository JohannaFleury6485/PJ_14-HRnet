
export const setFirstName = (firstName) =>{
    return {
      type : 'SET_FIRST_NAME',
      payload : firstName,
    };
  }

  export const setLastName = (lastName) =>{
    return {
      type : 'SET_LAST_NAME',
      payload : lastName,
    };
  }

  export const setDateOfBirth = (dateOfBirth) =>{
    return {
      type : 'SET_DATE_OF_BIRTH',
      payload : dateOfBirth,
    };
  }

  export const setDateStart = (dateStart) =>{
    return {
      type : 'SET_DATE_START',
      payload : dateStart,
    };
  }

  export const setCity = (city) =>{
    return {
      type : 'SET_CITY',
      payload : city,
    };
  }

  export const setDepartment = (department) =>{
    return {
      type : 'SET_DEPARTMENT',
      payload : department,
    };
  }

  export const setStreet = (street) =>{
    return {
      type : 'SET_STREET',
      payload : street,
    };
  }

  export const setZipCode = (zipCode) =>{
    return {
      type : 'SET_ZIP_CODE',
      payload : zipCode,
    };
  }

  export const setState = (state) =>{
    return {
      type : 'SET_STATE',
      payload : state,
    };
  }

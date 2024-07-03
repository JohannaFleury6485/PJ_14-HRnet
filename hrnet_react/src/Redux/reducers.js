import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[]
};

const userSlice = createSlice({
name: 'user',
initialState,
reducers: {
    addUser(state, action) {
        state.users.push(action.payload);
      },
    setUserFirstName(state, action) {
      state.firstName = action.payload;
    },
    setUserLastName(state, action) {
      state.lastName = action.payload;
    },
    setUserDateOfBirth(state, action) {
        state.dateOfBirth = action.payload;
    },
    setUserDateStart(state, action) {
        state.dateStart = action.payload;
    },
    setUserStreet(state, action) {
        state.street = action.payload;
    },
    setUserCity(state, action) {
        state.city= action.payload;
    },
    setUserZipCode(state, action) {
        state.zipCode = action.payload;
    },
    setUserDepartment(state, action) {
        state.department= action.payload;
    },
    setUserState(state, action) {
        state.state= action.payload;
    },

  },

});

export const { 
    setUserFirstName, 
    setUserLastName, 
    setUserDateOfBirth, 
    setUserCity, 
    setUserDateStart, 
    setUserDepartment, 
    setUserState, 
    setUserStreet, 
    setUserZipCode,
    addUser} = userSlice.actions;

export default userSlice.reducer;

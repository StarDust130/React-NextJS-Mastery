import { createSlice } from "@reduxjs/toolkit";
// const initalStateCustomer = {
//   fullName: "",
//   nationalID: "",
//   createdAt: "",
// };

// const customerReducer = (state = initalStateCustomer, action) => {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createAt,
//       };
//     default:
//       return state;
//   }
// };

// export default customerReducer;

// // Action Creators for Customer

// export function createCustomer(fullName, nationalID) {
//   return { type: "customer/createCustomer", payload: { fullName, nationalID } };
// }

// export function updateCustomer(fullName, nationalID) {
//   return {
//     type: "customer/updateCustomer",
//     payload: { fullName, nationalID, createAt: new Date().toISOString() },
//   };
// }


//! New Way to create slice

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,

  reducers: {
    createCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createdAt = new Date().toISOString();
    },
    updateCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createdAt = new Date().toISOString();
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;
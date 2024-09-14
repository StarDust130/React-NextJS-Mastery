const initalStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerReducer = (state = initalStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createAt,
      };
    default:
      return state;
  }
};

export default customerReducer;

// Action Creators for Customer

export function createCustomer(fullName, nationalID) {
  return { type: "customer/createCustomer", payload: { fullName, nationalID } };
}

export function updateCustomer(fullName, nationalID) {
  return {
    type: "customer/updateCustomer",
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}

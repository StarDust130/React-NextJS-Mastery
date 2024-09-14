/* eslint-disable no-unused-vars */
import { combineReducers, createStore } from "redux";

const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initalStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const accountReducer = (state = initalStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
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

const RootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(RootReducer);

store.dispatch({ type: "account/deposit", payload: 100 });

export default store;

// Action Creators for Account

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/payLoan" };
}

// Action Creators for Customer

function createCustomer(fullName, nationalID) {
  return { type: "customer/createCustomer", payload: { fullName, nationalID } };
}

function updateCustomer(fullName, nationalID) {
  return {
    type: "customer/updateCustomer",
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}

store.dispatch(createCustomer("ChandraShekhar", "1234567890"));

console.log(store.getState());

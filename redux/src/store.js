const initalState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "APPLY_LOAN":
      return {
        ...state,
        loan: state.loan + action.payload,
        loanPurpose: action.loanPurpose,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

import { useSelector } from "react-redux";

function formatCurrency(value) {
  // Ensure that value is a number and provide a default of 0 if it's undefined or NaN
  const validValue = typeof value === "number" && !isNaN(value) ? value : 0;

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(validValue);
}

function BalanceDisplay() {
  // Use useSelector to get balance from Redux store
  const balance = useSelector((state) => state.account.balance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

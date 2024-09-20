/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, useContext, useState } from "react";

export const ReservationContext = createContext<any>(null);

const initialState = {
  range: { from: null, to: null },
  regularPrice: 23,
  discount: 23,
  numNights: 23,
  cabinPrice: 23,
};

export const ReservationProvider = ({ children }: any) => {
  const [range, setRange] = useState<any>({
    initialState,
  });

  return (
    <ReservationContext.Provider value={[range, setRange]}>
      {children}
    </ReservationContext.Provider>
  );
};


export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};
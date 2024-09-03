/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

const ListBox = ({ children }: any) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <>
      {" "}
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && <>{children}</>}
      </div>
    </>
  );
};
export default ListBox;

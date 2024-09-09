import { useEffect } from "react";

const useKey = (keyname, action) => {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === keyname.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, keyname]
  );
  return null;
};
export { useKey };

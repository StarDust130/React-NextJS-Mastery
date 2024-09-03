/* eslint-disable @typescript-eslint/no-explicit-any */
import WatchedBox from "./WatchedBox";

const Main = ({ children }: any) => {
  return (
    <>
      <main className="main">
     {children}

        <WatchedBox />
      </main>
    </>
  );
};
export default Main;

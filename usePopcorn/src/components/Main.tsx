/* eslint-disable @typescript-eslint/no-explicit-any */
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies }: any) => {
  return (
    <>
      <main className="main">
        <ListBox movies={movies} />

        <WatchedBox />
      </main>
    </>
  );
};
export default Main;

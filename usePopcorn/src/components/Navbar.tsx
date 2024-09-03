/* eslint-disable @typescript-eslint/no-explicit-any */
import Search from "./Search";


const Navbar = ({ children }: any) => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <Search />

        {children}
      </nav>
    </>
  );
};
export default Navbar;

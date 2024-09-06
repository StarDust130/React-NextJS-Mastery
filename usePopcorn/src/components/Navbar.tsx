/* eslint-disable @typescript-eslint/no-explicit-any */

const Navbar = ({ children }: any) => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>

        {children}
      </nav>
    </>
  );
};
export default Navbar;

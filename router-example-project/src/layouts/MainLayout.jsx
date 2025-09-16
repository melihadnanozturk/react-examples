import { NavLink, Outlet, useNavigation } from "react-router";

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <div id="main-layout">
      <header className="container">
        <h1>Main Layout</h1>
        <nav>
          <NavLink to="ev">Home</NavLink>
          <NavLink to="hakkimda">About</NavLink>
          <NavLink to="kurslar">Courses</NavLink>
          <NavLink to="yardim">Help</NavLink>
        </nav>
      </header>
      <main className="container">
        {navigation.state === "loading" && (
          <div>
            <span>
              <i className="fas fa-spinner fa-solid">Loading...</i>
            </span>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}

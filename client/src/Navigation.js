import "./Navigation.css";
import { Outlet, Link } from "react-router-dom"; // <Outlet> - Just to notify React to render the route; // <Link> = <a>

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" href="#">
          RECOTRAFFIC<span> LPR</span>
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Live Result
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UserManual">
              User Manual
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Navigation;

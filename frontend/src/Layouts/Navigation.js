//CSS libraries
import "../Assets/CSS/Navigation.css";

//Node Package Manager (NPM) libraries
// <Outlet> - Just to notify React to render the route;
// <Link> = <a>
import { Outlet, Link } from "react-router-dom";

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
            <Link className="nav-link" to="/HistoricalData">
              Historical Data
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

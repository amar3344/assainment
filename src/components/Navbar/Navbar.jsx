import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbarContainer">
      <div className="navLogo">
        <img src={logo} alt="logo" width={120} />
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/" className={props.type === "home" ? "active" : null}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/recording"
            className={props.type === "recording" ? "active" : null}
          >
            RECORDING
          </Link>
        </li>
        <li>
          <Link
            to="/calls"
            className={props.type === "calls" ? "active" : null}
          >
            CALLS
          </Link>
        </li>
        <li>
          <Link
            to="/deals"
            className={props.type === "deals" ? "active" : null}
          >
            DEALS
          </Link>
        </li>
        <li>
          <Link to="/team" className={props.type === "teams" ? "active" : null}>
            TEAM
          </Link>
        </li>
        <li>
          <Link
            to="/activity"
            className={props.type === "activity" ? "active" : null}
          >
            ACTIVITY
          </Link>
        </li>
        <li>
          <Link
            to="/library"
            className={props.type === "library" ? "active" : null}
          >
            LIBRARY
          </Link>
        </li>
      </ul>
      <div className="navSearch">
        <input type="text" placeholder="Search" className="navInput" />
        <img
          src="https://img.icons8.com/ios-filled/24/ffffff/search--v1.png"
          alt="search"
        />
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/account">MY ACCOUNT</Link>
        </li>
      </ul>
      <div className="navHelp">
        <img
          src="https://img.icons8.com/ios-glyphs/35/ffffff/help.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Navbar;

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    // Reset the redux store to remove any stale data from auth slice
    // This is not strictly necessary but it's good practice to clean up after yourself
    // and ensure that your app doesn't hold onto unnecessary data
    // which can lead to memory leaks and other issues
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/login"}>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to={"/register"}>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;

import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

export const AnotherLayout = () => {
  const navigate = useNavigate();

  const clickBtn = () => {
    return navigate("/dashboard");
  };

  const backBtn = () => {
    return navigate(-3);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="aboutus">About Us</Link>
          </li>
          <li>
            <Link to="contactus">Contact Us</Link>
          </li>
        </ul>

        <button className="btn btn-primary" onClick={clickBtn}>
          Dashboard
        </button>

        <button className="btn btn-primary ms-3" onClick={backBtn}>
          Back
        </button>
      </nav>

      <Outlet />
    </div>
  );
};

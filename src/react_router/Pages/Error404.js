import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      <h3>Error 404</h3>
      <h5>Awwwwn, it seems like the page you are looking for does not exist</h5>
      <h6>
        Please go back
        <span>
          <Link to="/"> Home</Link>
        </span>
      </h6>
    </div>
  );
};

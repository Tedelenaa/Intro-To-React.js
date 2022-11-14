import { Link, Outlet } from "react-router-dom";

export const BooksLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, labore.
      </p>
      <Outlet />
    </div>
  );
};

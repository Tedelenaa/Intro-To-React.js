import { Route, Routes, Link, NavLink } from "react-router-dom";
import { AboutUs } from "./Pages/AboutUs";
import { AnotherLayout } from "./Pages/AnotherLayout";
import { Book } from "./Pages/Book";
import BookList from "./Pages/BookList";
import { BooksLayout } from "./Pages/BooksLayout";
import BooksRoutes from "./Pages/BooksRoutes";
import { ContactUs } from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";
import { Error404 } from "./Pages/Error404";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import { NewBook } from "./Pages/NewBook";

const MainApp = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link> */}
          <NavLink
            to="/"
            className="nav-link active"
            aria-current="page"
            style={({ isActive }) => ({ color: isActive ? "grey" : "green" })}
          >
            {/* style={({ isActive }) => ({ color: isActive ? "red" : "black" })} */}
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="books">
            Book List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="books/new">
            New Book
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="aboutus">
            About Us
          </Link>
        </li>
        {/* <li>
          <a href="#freshset">Fresh Set</a>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="#">
            Link
          </Link>
        </li> */}
      </ul>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}

      <Routes>
        <Route path="/books" element={<Layout />} />
      </Routes>

      <Routes>
        {/* <Route path="/books"> */}

        {/* <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}

        <Route path="/books/*" element={<BooksRoutes />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route element={<AnotherLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default MainApp;

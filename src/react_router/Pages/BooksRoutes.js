import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import { AnotherLayout } from "./AnotherLayout";
import { Book } from "./Book";
import BookList from "./BookList";
import { BooksLayout } from "./BooksLayout";
import { ContactUs } from "./ContactUs";
import { Error404 } from "./Error404";
import Home from "./Home";
import { NewBook } from "./NewBook";

const BooksRoutes = () => {
  return (
    <Routes>
      <Route element={<BooksLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default BooksRoutes;

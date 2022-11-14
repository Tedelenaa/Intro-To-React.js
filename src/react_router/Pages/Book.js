import { Link, useParams } from "react-router-dom";

export const Book = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Books</h3>
      <h4>Book: {id}</h4>
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "Emily Henry",
    title: "Happy Place",
    img: "https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// export default Greeting;

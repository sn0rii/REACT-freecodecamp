import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg"
    alt="Happy Place"
  />
);
const Title = () => {
  return <h2>Happy Place</h2>;
};
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Emily Henry </h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// export default Greeting;

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const author = "Emily Henry ";
const title = "Happy Place";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// export default Greeting;

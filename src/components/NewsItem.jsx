import React from 'react';
import img from "../assests/gb.png";

const NewsItem = ({ title, description, url, src }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block  my-5 mx-5 py-2 px-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:img} className="card-img-top" style={{ height: "200px", width: "320px" }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title && title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 50) : "NEWS has interesting"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;

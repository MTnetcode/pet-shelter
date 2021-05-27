import React from "react";
import "./news.css"
function NewsBox({title, text}) {

  return (
      <div className="box">
        <h2 className="news-header">{title}</h2>
        <p className="news-paragraph">{text}</p>
      </div>
  );
}

export default NewsBox;
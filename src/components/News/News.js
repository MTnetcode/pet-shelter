import React, { useState, useEffect } from "react";
import "./news.css";
import fetchNews from "../../services/fetchNews";
import NewsBox from "./NewsBox.js";
function News() {
  const [getNews, setNews] = useState();
  async function returnNews() {
    setNews(await fetchNews());
  }
  useEffect(() => {
    returnNews();
  }, []);
  return (
    <div>
      <h3 className="news">News</h3>
      <div className="news-flex">
        {getNews !== undefined &&
          getNews.map((oneNew) => {
            return (
              <NewsBox
                key={oneNew._id}
                title={oneNew.name}
                text={oneNew.text}
              />
            );
          })}
      </div>
    </div>
  );
}

export default News;

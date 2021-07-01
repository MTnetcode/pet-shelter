import React from "react";
import "./newsDashboard.css";
import Post from "../post/post";
import { useState } from "react";
import { useEffect } from "react";
import fetchNews from "../../services/fetchNews";
import verifyLogin from "../../services/verifyLogin";
import NewsBoxDashboard from "./newsBoxDashboard";
import Wait from "../reusable/Wait";
import { Redirect } from "react-router-dom";
import deletePost from "../../services/deletePost";

function NewsDashboard() {
  const [getNews, setNews] = useState();
  const [addNew, setAddNew] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(loginVerifyService());
  const [errorMsg, setErrorMsg] = useState("");

  async function returnNews() {
    setNews(await fetchNews());
  }
  useEffect(() => {
    returnNews();
  }, [addNew]);

  const handleClick = (e) => {
    setAddNew(!addNew);
  };

  async function loginVerifyService() {
    const res = await verifyLogin();
    setIsLoggedIn(res);
  }

  function deleteNew(id) {
    setNews(getNews.filter((oneNew) => oneNew._id !== id));
    deletePost(id, "news");
  }

  return (
    <div>
      <div className="plus">
        <i class="fas fa-plus" onClick={handleClick}></i>
      </div>
      {addNew && (
        <Post
          handleClick={handleClick}
          setAddNew={setAddNew}
          addImg={false}
          where="news"
          setErrorMsg={setErrorMsg}
        />
      )}
      {getNews !== undefined ? (
        getNews.map((oneNew) => {
          console.log(oneNew);
          return (
            <NewsBoxDashboard
              key={oneNew.key}
              id={oneNew._id}
              title={oneNew.name}
              text={oneNew.text}
              deletePost={deleteNew}
            />
          );
        })
      ) : (
        <Wait msg="getting news" />
      )}
      {!isLoggedIn && (
        <Redirect
          to={{
            pathname: "/login",
            state: { msg: errorMsg },
          }}
        />
      )}
    </div>
  );
}

export default NewsDashboard;

import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <i class="fas fa-times fa-2x"></i>
      <h1 className="h1-post"> New post</h1>
      <div className="post-form">
    <div className="upload">
        <span class="material-icons-outlined">upload</span>
        <p className="p-upload">
          Upload photo
        </p>
      </div>
      <textarea
        className="post-area"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Type..."
      ></textarea>
      <button className="btn-publish">Publish</button>
      </div>
      

    </div>
  );
}

export default Post;

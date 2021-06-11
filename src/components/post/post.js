import React, { useState } from "react";
import "./post.css";

function Post({ category }) {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category,
    img: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <div className="post">
      <i class="fas fa-times fa-2x"></i>
      <h1 className="h1-post"> New post</h1>
      <div className="post-form">
        <div className="upload">
          <label for="file-upload" class="custom-file-upload">
            <span class="material-icons-outlined">upload</span>{" "}
            <p className="p-upload">Upload photo</p>
          </label>
          <input
            id="file-upload"
            type="file"
            name="img"
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          placeholder="Title"
          className="title"
          name="title"
          onChange={handleChange}
        />
        <textarea
          className="post-area"
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Type..."
          onChange={handleChange}
        ></textarea>
        <button className="btn-publish">Publish</button>
      </div>
    </div>
  );
}

export default Post;

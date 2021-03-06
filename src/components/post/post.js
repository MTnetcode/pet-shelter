import React, { useState } from "react";
import "./post.css";
import sendData from "../../services/sendData";
import Wait from "../reusable/Wait";

function Post({
  category,
  handleClick,
  setAddNew,
  addImg,
  where,
  setErrorMsg,
}) {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    img: "",
  });
  const [getDisabled, setDisabled] = useState(true);
  const [showWait, setShowWait] = useState(false);
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
    if (formData.name && formData.text) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newForm = new FormData(e.target.form);
    where === "pets" && newForm.append("category", category);
    setShowWait(true);
    const dataSent = await sendData(newForm, where);
    if (dataSent) {
      setShowWait(false);
    } else {
      setShowWait(false);
      setErrorMsg("Your post could not be created");
    }
    setAddNew(false);
  };
  return (
    <div className="post">
      <i class="fas fa-times fa-2x" onClick={handleClick}></i>
      <h1 className="h1-post"> New post</h1>
      <form name="form">
        <div className="post-form">
          {addImg && (
            <div className="upload">
              <label for="file-upload" class="custom-file-upload">
                <span class="material-icons-outlined m-upload">upload</span>{" "}
                <p className="p-upload">Upload photo</p>
              </label>

              <input
                id="file-upload"
                type="file"
                name="img"
                onChange={handleChange}
              />
            </div>
          )}

          {formData.img && `image ${formData.img.name} uploaded`}
          <input
            type="text"
            placeholder="Title"
            className="title"
            name="name"
            value={formData.name}
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
            value={formData.text}
          ></textarea>
          <input
            type="submit"
            className="btn-publish"
            disabled={getDisabled}
            onClick={handleSubmit}
            value="Submit"
          ></input>
        </div>
      </form>
      {showWait && <Wait msg="Adding post" />}
    </div>
  );
}

export default Post;

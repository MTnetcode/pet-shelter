import React, { useState } from "react";
import "./change.css";
import updatePost from "../../services/updatePost";

function Change({ id, setOpenEditBox, name, text }) {
  const [formData, setFormData] = useState({
    id: id,
    name: name,
    text: text,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newForm = new FormData(e.target.form);
    console.log(e.target.form);
    const res = await updatePost(newForm);
    if (res) {
      console.log("success");
    } else {
      console.log("fail");
    }
    setOpenEditBox(false);
  };
  return (
    <div>
      <div className="rose">
        <div className="white">
          <div className="image"></div>
          <form name="form">
            <div>
              <input
                className="head"
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />{" "}
              <br />
              <textarea
                className="area"
                onChange={handleChange}
                shape=""
                href=""
                name="text"
                alt=""
                value={formData.text}
              />
              <br />
              <div className="butt">
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="save"
                  className="btn"
                />
                <button className="btn" onClick={() => setOpenEditBox(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Change;

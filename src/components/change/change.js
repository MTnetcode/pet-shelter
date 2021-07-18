import React, { useState } from "react";
import "./change.css";

function Change({ id, setOpenEditBox, name, text }) {
  const [formData, setFormData] = useState({
    name: name,
    text: text,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <div className="rose">
        <div className="white">
          <div className="image"></div>

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
              <button className="btn">Save</button>
              <button className="btn" onClick={() => setOpenEditBox(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Change;

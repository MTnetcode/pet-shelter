import React from "react";
import "./change.css";

function Change() {
  return (
    <div>
      <div className="rose">
        <div className="white">
          <div className="image"></div>

          <div>
            <input className="head" type="text" value="Emma" /> <br />
            <textarea
              className="area"
              onInput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
              shape=""
              href=""
              alt=""
              value=" Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. Fusce at egestas libero. Cras convallis egestas ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum at massa dui. Morbi et purus velit. Etiam tristique, justo eu condimentum efficitur, purus velit facilisis sem, id fringilla tortor quam quis dolor. Praesent ultricies dignissim ex, at volutpat sapien ullamcorper rhoncus. Curabitur quam velit, ullamcorper ut congue eget, convallis et velit. Donec placerat, magna eu venenatis tempus, dui sapien aliquam libero, sit amet maximus erat massa quis nisi. Integer pharetra auctor arcu, non tincidunt dui fermentum ut. Nullam interdum sapien id mauris dapibus, a pharetra purus rhoncus. Nullam viverra iaculis tristique. Donec quis mauris ipsum. Nunc vehicula magna at erat tristique rutrum."
            />
            <br />
            <strong>If you are interest please check terms of adoption</strong> <br />
            <div className="butt">
            <button className='btn'>Save</button>
            <button className='btn'>Cancle</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Change;

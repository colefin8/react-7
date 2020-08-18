import React, { useState } from "react";
import styleHoc from "../HOCS/styleHOC";

const Toggle = (props) => {
  const [on, setOn] = useState(false);
  const { style, children } = props;
  return (
    <div style={style}>
      {on && children}
      <button onClick={() => setOn(!on)} style={style}>
        Show/Hide
      </button>
    </div>
  );
};

export default styleHoc(Toggle);

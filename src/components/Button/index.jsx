import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} type={props.type || "button"} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button
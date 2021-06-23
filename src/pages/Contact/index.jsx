import React from "react";
import "./styles.css"

const Contact = () => {
  return (
      <form>
         <h1> Contact Form </h1>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Email:
    <input type="email" name="email" />
  </label>
  <input type="submit" value="Submit" />
</form>

 );
}

export default Contact
import React from "react";
import "./style.css";

function Form(props) {
  return (
      <div className="form-group">
        <label >Employee Name:</label>
        <input
        type = "search"
        onChange={event => props.getFilterEmployees(event)}
        />
      </div>
  );
}

export default Form;
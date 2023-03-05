import React from "react";
import "./style.css";

function projectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>link</strong> {props.link}
          </li>
          <li>
            <strong>Github </strong>  
            <a href={props.github}>Repository link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default projectCard;

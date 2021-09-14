import React from "react";

const MenuItem = ({ title }) => (
  <div className="directory-menu">
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  </div>
);

export default MenuItem;

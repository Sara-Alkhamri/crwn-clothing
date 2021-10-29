import React from "react";
import './menu-item.styles.scss'

//functional component because we don't need state here

const MenuItem = ({ title, imageUrl, size }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-item`}>
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  </div>
);

export default MenuItem;

import React from "react";
import './style.css';

export default function Gallerycard({image, title}) {
    console.log("Gallerycard");
  return (
      <div className="gallery-grid">
        <div className="gallery-card">
        <img src={image} alt={title+ "pic"} />
        <p>{title}</p>
        </div>
      </div>
  );
}
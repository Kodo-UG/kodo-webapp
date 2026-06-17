import React from 'react';
import './index.css';

function CustomContainer({children, py, className}) {
  return (
    <div className={`custom-container ${className}`} style={{ paddingTop: py || "8rem", paddingBottom: py || "8rem" }}>{children}</div>
  )
}

export default CustomContainer
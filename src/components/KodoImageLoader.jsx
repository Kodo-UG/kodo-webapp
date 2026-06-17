import React, { useState } from "react";

function KodoImageLoader({ src, alt,  }) {
  
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <img
      src={src}
      style={{
        width: "100%",
        height:"100%",
        objectFit: "contain",
        filter: imageLoaded ? "none" : "blur(5px)",
        transition: "filter 0.3s ease-in-out",
      }}
      loading="lazy"
      onLoad={ handleImageLoad }
      alt={alt}
    />
  );
}

export default KodoImageLoader;

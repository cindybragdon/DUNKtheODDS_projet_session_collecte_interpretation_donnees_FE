import React, { useEffect, useState } from "react";
import "../index.css";
import listImages from "../images";


interface Image {
  id: number;
  name: string;
  url: string;
}

const Carousel: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    setImages(listImages)
  }, []);

  console.log("images : " + images);
  return (
    <div className="container">
      {images.map((image) => (
        <div className="card" key={image.name}>
          <img
            src={process.env.PUBLIC_URL + image.url}
            alt={` ${image.name}`}
            className="carousel-image"
          />
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
          <h3 className="title">{image.name}</h3>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

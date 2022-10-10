import React from "react";
import { FaCss3, FaHtml5, FaJsSquare, FaNode, FaReact } from "react-icons/fa";

const Carousel = () => {
  return (
    <div>
      <div className="carousel-parent position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I Use
        </h1>
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="#5ED3F3" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaJsSquare color="#EFD81D" />
          </span>
          <span style={{ "--i": 3 }}>
            <FaNode color="#87BF00" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaHtml5 color="#DD4B25" />
          </span>
          <span style={{ "--i": 5 }}>
            <FaCss3 color="#254BDD" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

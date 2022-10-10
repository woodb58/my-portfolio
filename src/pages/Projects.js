import React from "react";
import Header from "../components/Header";
import "../stylesheets/home.css";
import { FaLaptopCode } from "react-icons/fa";
import ProjectData from "./ProjectData";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row mt-5">
          <div className="col-md-6 flex-with-center">
            <div className="intro-box neo-box2 px-3 py-5">
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">Projects quote goes here</p>
              <button className="primary-btn font-bold w-50">
                Get Started
              </button>
            </div>
          </div>

          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#440786"
                d="M40.9,-73.8C52,-64.4,59.3,-51.4,67,-38.6C74.6,-25.7,82.5,-12.8,85.8,1.9C89.1,16.7,87.9,33.3,81.1,47.7C74.3,62,62,74.1,47.6,78.9C33.1,83.7,16.6,81.3,2.7,76.7C-11.3,72.1,-22.5,65.3,-34.7,59.2C-46.9,53.1,-60.1,47.7,-71.1,38C-82.1,28.2,-91,14.1,-93,-1.2C-95,-16.4,-90.1,-32.8,-81.7,-47C-73.2,-61.1,-61.1,-72.9,-46.8,-80.5C-32.6,-88.1,-16.3,-91.5,-0.7,-90.3C14.9,-89,29.8,-83.2,40.9,-73.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode className="laptop position-absolute top-50 start-50 translate-middle" />
          </div>
        </div>
      </div>

      <div className="container projects-list">
        <h3 className="font-bold"> Take a Look at My Projects</h3>
        <hr />

        <div className="row">
          {ProjectData.map((project) => {
            return (
              <div className="col-md-4">
                <div className="project position-relative">
                  <img src={project.image} alt="project" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.description}</p>
                    <div className="btn-div">
                      <button className="primary-btn project-btn">Live Site</button>
                      <button className="primary-btn project-btn">Repo</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

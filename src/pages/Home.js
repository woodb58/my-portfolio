import React from "react";
import Circles from "../img/circle.svg";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import jsPic from "../img/js.svg";
import developer from "../img/developer.svg";
import blob from "../img/blob.svg";

const Home = () => {
  return (
    <div>
      <Header />

      <div
        className="intro center"
        style={{ backgroundImage: `url(${Circles})` }}
      >
        <div>
          <h1 data-aos="fade-up">Brian</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              Full Stack <br /> Web Developer
            </p>
            <button className="primary-btn font-bold w-50">Get Started</button>
          </div>
        </div>
      </div>
      <Carousel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#011e33"
            fill-opacity="1"
            d="M0,32L21.8,37.3C43.6,43,87,53,131,85.3C174.5,117,218,171,262,160C305.5,149,349,75,393,69.3C436.4,64,480,128,524,160C567.3,192,611,192,655,181.3C698.2,171,742,149,785,122.7C829.1,96,873,64,916,74.7C960,85,1004,139,1047,176C1090.9,213,1135,235,1178,202.7C1221.8,171,1265,85,1309,58.7C1352.7,32,1396,64,1418,80L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="row pt-5 justify-content-start">
          <div className="col-md-4">
            <div className="neo-box2 p-4 font-bold" data-aos="fade-right">
              <h1>Yes that's right...</h1>
              <br />
              <p>I am a Javascript Buff...</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center" data-aos="fade-up">
          <div className="col-md-4">
            <div>
              <img src={jsPic} alt="JavaScript symbol" class="tech-pic" />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end" data-aos="fade-left">
          <div className="col-md-4">
            <div className="neo-box2 p-4 font-bold">
              <p>
                JavaScript is one of the most popular programming languages
                because of its ubiquitous use on all platforms and mass
                adoption. Main Use Case: Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container devstack neo-box2 my-5 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center ">My Development Stack</h3>
          <hr />
          <img src={developer} alt="developer pic" className="tech-pic" />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>React</p>
              <p>Redux</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>Semantic UI</p>
              <p>Ant Design</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3 className="font-bold">Back End</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>SQL</p>
              <p>NoSQL</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-center">Who Is Brian?</h3>
        <div
          className="center who-i-am flex-with-center"
          style={{ backgroundImage: `url(${blob})` }}
        >
          <div>
            <h3>Hi, How Are You</h3>
            <hr />
            <p>
              <pre>
                {JSON.stringify(
                  {
                    name: "Brian.Wood",
                    from: "Wisconsin",
                    loves: "Web Development, JS, Making Cool Things",
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

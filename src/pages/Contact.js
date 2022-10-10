import React from "react";
import Header from "../components/Header";
import ContactImg from "../img/contact.svg";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6">
            <img src={ContactImg} alt="people on their cell phone" />
          </div>
          <div className="col-md-6">
            <div className="contact-form m-2 p-5 neo-box2">
              <h3 className="font-bold">Contact ME</h3>
              <hr />
              <input type="text" className="form-control" placeholder="Name:" />
              <input
                type="text"
                className="form-control"
                placeholder="E-Mail:"
              />
              <textarea className="form-control" rows={3} defaultValue={""} />
              <button className="primary-btn mt-3">SUMBIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

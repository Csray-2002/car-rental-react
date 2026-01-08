import React, { useState } from "react";

function About() {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

const [btnText, setbtnText] = useState("Enable Light mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setbtnText("Enable Dark Mode")
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Enable Light mode")
    }
  };

  return (
    <div>
      <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <p>
          We are a trusted car rental service dedicated to making your journeys
          smooth, affordable, and stress-free. Whether you need a car for a day,
          a weekend getaway, business travel, or a special occasion, we offer a
          wide range of well-maintained vehicles to suit every need and budget.
          Customers can choose to rent a car with or without a driver, giving
          complete flexibility and comfort. Our focus is on transparent pricing,
          easy booking, timely service, and customer satisfaction. With safety,
          reliability, and convenience at the core of our service, we aim to
          make every ride a pleasant experience.
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What types of cars do you offer?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show" style={myStyle}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  We offer hatchbacks, sedans, SUVs, and premium cars depending
                  on availability.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What documents are required for booking?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse" style={myStyle}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A valid driving license and government-issued ID are required.
                For self-drive rentals, additional verification may be needed.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Are fuel charges included?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse" style={myStyle}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Fuel charges are usually{" "}
                <strong>not included unless specified</strong> in the booking
                details.
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default About;

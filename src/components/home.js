import React from "react";
import carsData from "../data/carsData";
import CarCard from "./carCards";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center p-5">
        <h1>Rent the Perfect Car for Your Journey</h1>
        <p>Affordable • Reliable • Easy Booking</p>
      </div>

      {/* Search Section */}
      <div className="container mt-4">
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">Search Cars</h4>

          <div className="row g-3">
            <div className="col-md-3">
              <input
                className="form-control"
                placeholder="Pickup Location"
              />
            </div>

            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-3 d-grid">
              <button className="btn btn-primary">
                Find Cars
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <div className="container mt-5">
        <h3 className="mb-4">Popular Cars</h3>

        <div className="row">
          {carsData.slice(0,6).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mt-5 text-center">
        <h3>Why Choose Us</h3>

        <div className="row mt-4">
          <div className="col-md-3">Quality Cars</div>
          <div className="col-md-3">Best Prices</div>
          <div className="col-md-3">24/7 Support</div>
          <div className="col-md-3">Secure Payments</div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">How It Works</h3>

        <div className="row text-center">
          <div className="col-md-4"> Search Car</div>
          <div className="col-md-4"> Choose Dates</div>
          <div className="col-md-4"> Drive & Enjoy</div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-dark text-white text-center p-3 mt-5">
        <p>© 2026 Car Rental App | All Rights Reserved</p>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${car.id}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={car.image}
          className="card-img-top h-75 w-100"
          alt={car.name}
        />

        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">
            {car.type} • {car.transmission}
          </p>
          <p className="fw-bold">
            ${car.pricePerDay} / day
          </p>

          <button className="btn btn-primary w-100" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carsData from "../data/carsData";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = carsData.find((c) => c.id === parseInt(id));

  // Booking states
  const [pickupLocation, setPickupLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Location suggestions
  const allLocations = [
    "Toronto",
    "Ottawa",
    "Montreal",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Winnipeg",
    
    "Windsor",
    "Chatham"
  ];
  const [suggestions, setSuggestions] = useState([]);

  // Update suggestions as user types
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setPickupLocation(value);

    if (value.length > 0) {
      const filtered = allLocations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Fill input when user clicks a suggestion
  const handleSuggestionClick = (loc) => {
    setPickupLocation(loc);
    setSuggestions([]);
  };

  // Calculate total days and price
  useEffect(() => {
    if (car && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const diffTime = end - start;
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setTotalDays(days > 0 ? days : 0);
      setTotalPrice(days > 0 ? days * car.pricePerDay : 0);
    } else {
      setTotalDays(0);
      setTotalPrice(0);
    }
  }, [startDate, endDate, car]);

  if (!car) return <p className="text-center mt-5">Car not found!</p>;

  const handleBooking = () => {
    if (!pickupLocation || !startDate || !endDate || totalDays <= 0) {
      alert("Please fill all fields correctly!");
      return;
    }

    alert(
      `Booking confirmed for ${car.name}\nLocation: ${pickupLocation}\nFrom: ${startDate}\nTo: ${endDate}\nTotal Days: ${totalDays}\nTotal Price: $${totalPrice}`
    );

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h3>Book {car.name}</h3>

      <div className="card p-4 shadow-sm mt-3">
        <div className="row">
          <div className="col-md-6">
            <img
              src={car.image}
              alt={car.name}
              className="img-fluid rounded"
            />
            <h5 className="mt-3">{car.name}</h5>
            <p>{car.type} • {car.transmission}</p>
            <p className="fw-bold">${car.pricePerDay} / day</p>
          </div>

          <div className="col-md-6">
            {/* Pickup Location with suggestions */}
            <div className="mb-3 position-relative">
              <label>Pickup Location</label>
              <input
                type="text"
                className="form-control"
                value={pickupLocation}
                onChange={handleLocationChange}
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <ul className="list-group position-absolute w-100 zindex-1" style={{ maxHeight: "150px", overflowY: "auto" }}>
                  {suggestions.map((loc, idx) => (
                    <li
                      key={idx}
                      className="list-group-item list-group-item-action"
                      onClick={() => handleSuggestionClick(loc)}
                      style={{ cursor: "pointer" }}
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mb-3">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>End Date</label>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <p>Total Days: <strong>{totalDays}</strong></p>
              <p>Total Price: <strong>${totalPrice}</strong></p>
            </div>

            <button className="btn btn-primary w-100" onClick={handleBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;

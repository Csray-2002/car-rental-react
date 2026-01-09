import React, { useState } from "react";
import carsData from "../data/carsData";
import CarCard from "./carCards";

function Cars() {
  const [selectedType, setSelectedType] = useState("All");

  // Get min and max prices from carsData
  const prices = carsData.map((car) => car.pricePerDay);
  const globalMinPrice = Math.min(...prices);
  const globalMaxPrice = Math.max(...prices);

  // State for user-entered min and max
  const [minPrice, setMinPrice] = useState(globalMinPrice);
  const [maxPrice, setMaxPrice] = useState(globalMaxPrice);

  // Unique car types
  const types = ["All", ...new Set(carsData.map((car) => car.type))];

  // Filter cars
  const filteredCars = carsData.filter((car) => {
    const matchesType = selectedType === "All" || car.type === selectedType;
    const matchesPrice = car.pricePerDay >= minPrice && car.pricePerDay <= maxPrice;
    return matchesType && matchesPrice;
  });

  return (
    <div className="container mt-5">
      <h3 className="mb-4">All Available Cars</h3>

      {/* Filters */}
      <div className="row mb-4">
        {/* Type Filter */}
        <div className="col-md-4 mb-2">
          <label className="fw-bold me-2">Filter by Type:</label>
          <select
            className="form-select w-auto d-inline-block"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price */}
        <div className="col-md-4 mb-2">
          <label className="fw-bold">Min Price</label>
          <input
            type="number"
            className="form-control"
            min={globalMinPrice}
            max={globalMaxPrice}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>

        {/* Max Price */}
        <div className="col-md-4 mb-2">
          <label className="fw-bold">Max Price</label>
          <input
            type="number"
            className="form-control"
            min={globalMinPrice}
            max={globalMaxPrice}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Cars Grid */}
      <div className="row">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="text-center">No cars found for selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default Cars;

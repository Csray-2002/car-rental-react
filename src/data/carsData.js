const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 45,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    name: "Honda Civic",
    type: "Sedan Sports",
    transmission: "Automatic",
    pricePerDay: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HH8Vaet0nQwgMX1vnOSQfG3YUlGwtiq3xjK0h0JyL4YI3qtiNAH9ka1D3G5swSw3ChEWegto7Y3nTAMXgoHE6l11BgD_f_LofByfgdw_SJTur5LVGJqa4g&s=3"
  },
  {
    id: 3,
    name: "BMW X5",
    type: "Luxury SUV",
    transmission: "Automatic",
    pricePerDay: 90,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 4,
    name: "Audi A4",
    type: "Luxury Sedan",
    transmission: "Automatic",
    pricePerDay: 85,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    type: "Luxury Sedan",
    transmission: "Automatic",
    pricePerDay: 95,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 6,
    name: "Hyundai Elantra",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 42,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 7,
    name: "Kia Forte",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 40,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 8,
    name: "Mazda 3",
    type: "Sedan Sports",
    transmission: "Automatic",
    pricePerDay: 48,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 9,
    name: "Nissan Altima",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 46,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 10,
    name: "Ford Fusion",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 44,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 11,
    name: "Chevrolet Malibu",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 45,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 12,
    name: "Volkswagen Jetta",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 47,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 13,
    name: "Toyota Camry",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 55,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 14,
    name: "Honda Accord",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 58,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 15,
    name: "Tesla Model 3",
    type: "Electric Sedan",
    transmission: "Automatic",
    pricePerDay: 110,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 16,
    name: "Tesla Model Y",
    type: "Electric SUV",
    transmission: "Automatic",
    pricePerDay: 120,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 17,
    name: "Ford Explorer",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 75,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 18,
    name: "Toyota RAV4",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 70,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 19,
    name: "Honda CR-V",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 72,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 20,
    name: "Mazda CX-5",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 68,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 21,
    name: "Jeep Wrangler",
    type: "Off-Road SUV",
    transmission: "Automatic",
    pricePerDay: 80,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 22,
    name: "Chevrolet Tahoe",
    type: "Full Size SUV",
    transmission: "Automatic",
    pricePerDay: 95,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 23,
    name: "GMC Yukon",
    type: "Full Size SUV",
    transmission: "Automatic",
    pricePerDay: 98,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 24,
    name: "Subaru Outback",
    type: "Crossover",
    transmission: "Automatic",
    pricePerDay: 65,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 25,
    name: "Subaru Forester",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 67,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 26,
    name: "Hyundai Tucson",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 66,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 27,
    name: "Kia Sportage",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 64,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 28,
    name: "Ford Mustang",
    type: "Sports Car",
    transmission: "Automatic",
    pricePerDay: 105,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 29,
    name: "Chevrolet Camaro",
    type: "Sports Car",
    transmission: "Automatic",
    pricePerDay: 108,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 30,
    name: "Dodge Charger",
    type: "Sports Sedan",
    transmission: "Automatic",
    pricePerDay: 100,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 31,
    name: "Nissan Maxima",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 60,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 32,
    name: "Toyota Highlander",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 78,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 33,
    name: "Honda Pilot",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 80,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 34,
    name: "Kia Telluride",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 82,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 35,
    name: "Hyundai Palisade",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 84,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 36,
    name: "Volkswagen Tiguan",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 63,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 37,
    name: "Volkswagen Passat",
    type: "Sedan",
    transmission: "Automatic",
    pricePerDay: 52,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 38,
    name: "Mini Cooper",
    type: "Compact",
    transmission: "Automatic",
    pricePerDay: 55,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 39,
    name: "Fiat 500",
    type: "Compact",
    transmission: "Automatic",
    pricePerDay: 48,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 40,
    name: "Toyota Prius",
    type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 60,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 41,
    name: "Hyundai Ioniq",
    type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 62,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 42,
    name: "Ford Escape",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 65,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 43,
    name: "Chevrolet Equinox",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 66,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 44,
    name: "Nissan Rogue",
    type: "SUV",
    transmission: "Automatic",
    pricePerDay: 67,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 45,
    name: "Toyota Sienna",
    type: "Minivan",
    transmission: "Automatic",
    pricePerDay: 75,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 46,
    name: "Honda Odyssey",
    type: "Minivan",
    transmission: "Automatic",
    pricePerDay: 78,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 47,
    name: "Chrysler Pacifica",
    type: "Minivan",
    transmission: "Automatic",
    pricePerDay: 80,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 48,
    name: "Ram 1500",
    type: "Pickup Truck",
    transmission: "Automatic",
    pricePerDay: 90,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 49,
    name: "Ford F-150",
    type: "Pickup Truck",
    transmission: "Automatic",
    pricePerDay: 92,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 50,
    name: "Chevrolet Silverado",
    type: "Pickup Truck",
    transmission: "Automatic",
    pricePerDay: 94,
    image: "https://via.placeholder.com/300x200"
  }
];

export default carsData;

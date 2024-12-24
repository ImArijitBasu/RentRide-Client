import React from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const car = useLoaderData();
  console.log(car);
  return (
    <div className="flex flex-col md:flex-row container mx-auto justify-center space-x-4 mt-10">
      <div className="">
        <img
          src={car.imageUrl}
          alt=""
          className="w-auto max-w-96 h-full object-cover rounded-lg"
        />
      </div>
      <div className="border-b-4 border-blue-900 mt-4 md:mt-0">
        <p className="bg-yellow-500 w-fit rounded-3xl p-1 text-white font-bold">
          {car.availability}
        </p>
        <p className="font-bold text-2xl uppercase">{car.carModel}</p>
        <p className="text-sm font-light ">Rent Fee: {car.dailyRentalPrice}/day</p>

        <div className="border-l-4 pl-2 border-blue-900">
          <p className="font-semibold">Features</p>
          {car?.features?.map((feature) => (
            <p className="text-sm"> ⫸ {feature}</p>
          ))}
        </div>
        <p className="text-sm leading-loose"><span className="font-semibold">Description: </span> {car.description}</p>
        <button className="btn btn-primary btn-wide my-4"
            disabled={car.availability === "Unavailable" ? true : false}
        >Book Now</button>
      </div>

    </div>
  );
};

export default CarDetails;

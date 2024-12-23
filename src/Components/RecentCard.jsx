import React from "react";

const RecentCard = ({ car }) => {
  const { carModel, imageUrl, dailyRentalPrice, availability, postDate } = car;
  const calculateDaysAgo = (postDate) => {
    const now = new Date();
    const postDateObj = new Date(postDate);
    const timeDifference = now - postDateObj;
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysAgo;
  };
  const daysAgo = calculateDaysAgo(postDate);
  return (
    <div className="bg-white p-4 rounded-md shadow-md relative hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ">
        {
            availability === "Available" ? <p className="text-base absolute -top-2 -left-2  font-bold bg-green-500 w-fit p-2 rounded-2xl text-right text-green-50">{availability}</p> : <p></p>
        }
      
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={carModel}
          className="w-full h-52 rounded-md shadow-md object-cover"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
      <div className="mt-4">
        <p className="font-bold text-xl uppercase text-left border-b-4">{carModel}</p>
        <p className=" py-2 text-yellow-500 font-semibold">Rental Price: ${dailyRentalPrice}/day</p>

        <p className="text-sm text-gray-400 text-right py-3">Added {daysAgo} days ago</p>
      </div>
    </div>
  );
};

export default RecentCard;

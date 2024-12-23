import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Loading from "../Components/Loading";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/cars/${user.email}`).then((res) => {
      setCars(res.data);
      console.log(res.data);
          setLoading(false);
    }).catch((error) => {
      console.error("Error fetching cars:", error);
      setLoading(false);
    });
  }, [user.email]);
  console.log(cars[0]?.imageURL);

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Car details</th>
              <th>Date</th>
              <th>Availability</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loading />
            ) : (
              cars.map((car) => (
                <tr key={car._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          {car.imageUrl ? (
                            <img
                              src={car.imageUrl}
                              alt={car.carModel}
                              className="object-cover h-full w-full rounded-md"
                            />
                          ) : (
                            <Loading></Loading>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{car.carModel}</div>
                      </div>
                    </div>
                  </td>
                  <td>{new Date(car.postDate).toLocaleDateString()}</td>
                  <td>
                    <span className={`badge badge-ghost badge-sm ${car.availability === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                      {car.availability}
                    </span>
                  </td>
                  <td>{car.dailyRentalPrice}</td>
                  <th>
                    <div className="flex gap-2">
                      <div className="btn">
                        <GrUpdate />
                      </div>
                      <div className="btn">
                        <MdDeleteForever />
                      </div>
                    </div>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCars;

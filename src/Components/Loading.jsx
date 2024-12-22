import React from "react";

const Loading = () => {
  return (
    <div className="border  h-screen flex justify-center items-center bg-blue-900 ">
      <div className="" data-aos="zoom-out-up">
        <span className="loading loading-ring loading-lg text-red-600"></span>
      </div>
    </div>
  );
};

export default Loading;

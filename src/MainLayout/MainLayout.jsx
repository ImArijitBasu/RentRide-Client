import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header></Header>
      </div>
      <div className="container mx-auto flex-grow">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

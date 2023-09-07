import React from "react";
import CustmorTable from "../components/CustmorTable";

const Main = () => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-center text-3xl text-zinc-500 font-semibold">CUSTOMERS DETIALS</h1>
      </div>
      <CustmorTable/>
    </div>
  ); 
};

export default Main;

import {useState} from "react";
import TableHeading from "./TableHeading";
import AddCustmor from "./AddCustmor";
import TableDetials from "./TableDetials";
import CustomerDetials from "./CustomerDetials";
import { useDispatch, useSelector } from "react-redux";
import { toggleDataForm } from "../redux/toggleFormSlice";

const tableHeading = [
  "ID",
  "Name",
  "Phone No",
  "Email Id",
  "Date",
  "Service",
  "Product",
  "Price",
]; 

const CustmorTable = () => {
  const dispatch = useDispatch();
  const showForm = useSelector((store) => store.toggleForm.showForm)


  const handleShowForm = () => {
    dispatch(toggleDataForm())
  };
 
  return (
    <div className="mt-8">
      <div className="my-10">
        <div className="flex justify-between">
          <div className=" border-2 border-gray-500 rounded-md">
            <input
              type="text"
              placeholder="Search detials"
              className="p-3 w-96  outline-none rounded-l-md"
            />
            <button className="px-3 bg-blue-500 h-full text-white">
              search
            </button>
          </div>

          <button
            className="bg-blue-500 p-3 font-semibold text-white rounded-md hover:bg-blue-300"
            onClick={handleShowForm}
          >
            Add Detials
          </button>
        </div>

        {showForm && <AddCustmor hiddenShowButton={handleShowForm} />}
      </div>

      <table className="">
        <thead className="">
          <th className="p-2 flex bg-slate-300">
            {tableHeading.map((heading, index) => (
              <TableHeading key={index} tableTitle={heading} />
            ))}
          </th>
          {/* <TableDetials /> */}
          <CustomerDetials/>
        </thead>
      </table>
    </div>
  );
};

export default CustmorTable;

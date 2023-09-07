import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {deleteCustomer, setCurrentCustomer} from "../redux/customerSlice";
import {toggleDataForm} from "../redux/toggleFormSlice";

const TableDetials = ({customerData}) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEditBtn = () => {
    setShowEdit(!showEdit)
  }

  const handleEditCustomer = () => {
    dispatch(setCurrentCustomer(customerData));
    dispatch(toggleDataForm());
  };

  const handleDeleteCustomer = () => {
    dispatch(deleteCustomer(customerData.id));
  };

  const {customer, date, email, id, phone, price, product, service, size} =
    customerData;

  return (
    <>
      <tr className="p-2 flex bg-slate-100 border-2 border-b hover:bg-slate-50">
        <th className="p-3 w-32 font-normal">{id}</th>
        <th className="p-3 w-44 font-normal">{customer}</th>
        <th className="p-3 w-44 font-normal">{phone}</th>
        <th className="p-3 w-44 font-normal">{email}</th>
        <th className="p-3 w-44 font-normal">{date}</th>
        <th className="p-3 w-44 font-normal">{service}</th>
        <th className="p-3 w-44 font-normal">{product}</th>
        <th className="p-3 w-44 font-normal">Rs - {price}</th>
        <span>
          <BiDotsVerticalRounded
            className="mt-4"
            onClick={toggleShowEditBtn}
          />
          {showEdit && (
            <div className="absolute flex flex-col justify-center items-center gap-2 bg-gray-100 border-2">
              <button
                className="px-5 cursor-pointer hover:text-green-500"
                onClick={handleEditCustomer}
              >
                Edit
              </button>
              <button
                className="px-5 cursor-pointer hover:text-red-500"
                onClick={handleDeleteCustomer}
              >
                Delete
              </button>
            </div>
          )}
        </span>
      </tr>
    </>
  );
};

export default TableDetials;

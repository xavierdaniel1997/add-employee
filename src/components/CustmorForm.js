import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addCustomer, editCustomer, setCurrentCustomer } from "../redux/customerSlice";
import { toggleDataForm } from "../redux/toggleFormSlice";

const CustmorForm = () => {

  const dispatch = useDispatch()
  const currentCustomer = useSelector(store => store.customers.currentCustomer)
  const isEditFormOpen = useSelector(store => store.toggleForm.showForm)

  const initialFormData = {
    id: "",
    customer: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    product: "",
    price: "",
    size: "",
  };

  const [formDatas, setFormDatas] = useState(currentCustomer || initialFormData)
  // const [formDatas, setFormDatas] = useState({
  //   id: "",
  //   customer: "",
  //   phone: "",
  //   email: "",
  //   date: "",
  //   service: "",
  //   product: "",
  //   price: "",
  //   size:""
  // });
 
  useEffect(() => {
    if(isEditFormOpen) {
      setFormDatas(currentCustomer || initialFormData)
    }else {
      setFormDatas(initialFormData)
    }
  }, [currentCustomer, isEditFormOpen])

  const handleInputChanges = (e) => {
    const {name, value} = e.target;
    setFormDatas({
      ...formDatas,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(addCustomer(formDatas))
  //   dispatch(toggleDataForm())
  // } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCustomer) {
      dispatch(editCustomer(formDatas));
      dispatch(setCurrentCustomer(null));
    } else {
      dispatch(addCustomer(formDatas));
    }
    setFormDatas(initialFormData);
    dispatch(toggleDataForm());
  };


  return (
    <div className="mt-5 px-8 w-auto">
      <form
        className="flex flex-col gap-9"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="id"
            placeholder="ID"
            className="p-3 w-40 bg-slate-100 outline-none border-2 text-lg text-gray-700"
            value={formDatas.id}
            onChange={handleInputChanges}
          />
          <input
            type="text"
            name="customer"
            placeholder="Name"
            className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700"
            value={formDatas.customer}
            onChange={handleInputChanges}
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700"
            value={formDatas.phone}
            onChange={handleInputChanges}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Id"
            className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700"
            value={formDatas.email}
            onChange={handleInputChanges}
          />
        </div>
        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            placeholder=""
            className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700"
            value={formDatas.date}
            onChange={handleInputChanges}
          />
          <select
            className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700"
            name="service"
            value={formDatas.service}
            onChange={handleInputChanges}
          >
             <option value="">Service</option>
            <option value="stiching">Stiching</option>
            <option value="aultration">Aultration</option>
          </select>
        </div>
        <div className="flex gap-4">
          <select className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700" name="product" value={formDatas.product} onChange={handleInputChanges}>
            <option value="">Product</option>
            <option value="shirt">Shirt</option>
            <option value="trousers">Trousers</option>
            <option value="both">Both</option>
          </select>
          <select className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700" name="size" value={formDatas.size} onChange={handleInputChanges}>
            <option value=""></option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>
        <div className="flex gap-4">
          <input
            type=""
            placeholder="Price"
            className="p-3 w-full bg-slate-100 outline-none border-2 text-lg text-gray-700"
            name="price"
            value={formDatas.value}
            onChange={handleInputChanges}
          />
        </div>
        <button className="font-semibold text-lg bg-blue-600 text-white p-3 hover:bg-blue-400">
          {currentCustomer ? "UPDATE" : "SUBMIT"}     
        </button>
      </form>
    </div>
  );
};

export default CustmorForm;

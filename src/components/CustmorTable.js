import TableHeading from "./TableHeading";
import AddCustmor from "./AddCustmor";
import CustomerDetials from "./CustomerDetials";
import {useDispatch, useSelector} from "react-redux";
import {toggleDataForm} from "../redux/toggleFormSlice";
import {useState} from "react";
import TableDetials from "./TableDetials";
import NoResultFound from "./NoResultFound";

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
  const customerList = useSelector((store) => store.customers.customerList);
  const showForm = useSelector((store) => store.toggleForm.showForm);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQuery = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // setSearchQuery(e.target.value);
    // console.log(searchQuery);

 
      const filterSearch = customerList.filter((data) =>
        data.customer.toLowerCase().includes(query)
      );
      setSearchResults(filterSearch)
  };

  // const handleSearchCustomer = () => {
  //   const filterSearch = customerList.filter((data) =>
  //     data.customer.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setSearchResults(filterSearch);

  // };

  const handleShowForm = () => {
    dispatch(toggleDataForm());
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
              value={searchQuery}
              onChange={handleSearchQuery}
            />
            <button
              className="px-3 bg-blue-500 h-full text-white hover:bg-blue-400"
              // onClick={handleSearchCustomer}
            >
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

          {searchResults.length > 0
            ? searchResults.map((customerData, index) => (
                <TableDetials key={index} customerData={customerData} />
              ))
            : customerList.map((customerData, index) => (
                <TableDetials key={index} customerData={customerData} />
              ))}

          {searchResults.length === 0 && customerList.length === 0 && (
            <tr>
              <td colSpan={tableHeading.length}>
                <NoResultFound />
              </td>
            </tr>
          )}
        </thead>
      </table>
    </div>
  );
};

export default CustmorTable;

import {createSlice} from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    customerList: [],
    currentCustomer: null,
    isEditFormOpen: false,
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customerList.push(action.payload);
    },
    editCustomer: (state, action) => {
      const updateCustomer = action.payload;
      const index = state.customerList.findIndex(
        (customer) => customer.id === updateCustomer.id
      );
      if (index !== -1) {
        state.customerList[index] = updateCustomer;
      }
    },
    deleteCustomer: (state, action) => {
      const customerIdToDelete = action.payload;
      state.customerList = state.customerList.filter(
        (customer) => customer.id !== customerIdToDelete
      );
    },
    setCurrentCustomer: (state, action) => {
      state.currentCustomer = action.payload;
    },
    toggleEditForm: (state, action) => {
      state.isEditFormOpen = !state.isEditFormOpen;
    },
  },
});

export const {
  addCustomer,
  editCustomer,
  deleteCustomer,
  setCurrentCustomer,
  toggleEditForm,
} = customerSlice.actions;
export default customerSlice.reducer;

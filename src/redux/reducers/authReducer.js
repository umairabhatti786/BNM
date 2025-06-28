import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { image } from "../../assets/png/images";

const initialState = {
  selectedAccount: "Customer",
  user: null,
  isAuthenticated: false,
  AddNewServices: {
    isAddService: false,
    serviceName: "",
  },
  UserAccounts: [
    {
      user: "Customer",
      img: image.defimg700,
      isActive: true,
      buttonWidth: 70,
      id: 1,
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    setSelectedAccount: (state, { payload }) => {
      state.selectedAccount = payload;
    },

    setAddAccount: (state, { payload }) => {
      state.UserAccounts.push(payload);
    },
    setUpdateAccount: (state, { payload }) => {
      const { id, isActive } = payload; // Destructure the `id` and `isActive` from the payload
      const userIndex = state.UserAccounts.findIndex(
        (account) => account.id === id
      );
      if (userIndex !== -1) {
        // Update the `isActive` property
        state.UserAccounts[userIndex].isActive = isActive;

        if (isActive) {
          // Move the active account to the start of the array
          const [updatedAccount] = state.UserAccounts.splice(userIndex, 1);
          state.UserAccounts.unshift(updatedAccount);
        }
      }
    },

    setAddService: (state, { payload }) => {
      state.AddNewServices.isAddService = payload?.isAddService;
      state.AddNewServices.serviceName = payload?.serviceName;
    },
    setAddServiceVisable: (state, { payload }) => {
      state.AddNewServices.isAddService = payload;
    },
  },
});

export const {
  setUser,
  setSelectedAccount,
  setAddService,
  setAddServiceVisable,
  setAddAccount,
  setUpdateAccount,
} = authSlice.actions;

export default authSlice.reducer;
export const getSelectedAccount = (state) => state?.auth.selectedAccount;
export const getAddService = (state) => state?.auth.AddNewServices;
export const getUserAccounts = (state) => state?.auth.UserAccounts;
export const getUser = (state) => state?.auth.user;
export const getIsAuthenticated = (state) => state?.auth.isAuthenticated;

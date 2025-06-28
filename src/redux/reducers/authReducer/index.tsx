import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface AuthState {
  user: any;
  isScanned?:any
}
export const initialState: AuthState = {
  user: null,
  isScanned:false
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
    },
     setIsScanned: (state, { payload }: PayloadAction<any>) => {
      state.isScanned = payload;
    },
  },
});

export const { setUserData,setIsScanned } = authSlice.actions;
export default authSlice.reducer;

export const getUserData = (state: RootState) => state?.auth.user;
export const getToken = (state: RootState) => state?.auth.user?.token;
export const getScanned = (state: RootState) => state?.auth.isScanned;


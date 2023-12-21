import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Redux/Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  redirectToo: null,
  redirectTo: null,
  toggle: false,
};

export const register = createAsyncThunk(
  "/user/signup",

  async (formData) => {
    let res = await axiosInstance.post(`/user/signup`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const login = createAsyncThunk(
  "/user/signin",

  async (formData) => {
    let res = await axiosInstance.post(`/user/signin`, formData);

    let resData = res?.data;
    return resData;
  }
);

export const AuthSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    reset_redirectToo: (state, { payload }) => {
      state.redirectToo = payload;
    },

    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },

    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.toggle = true;
      }
    },
    handleLoggedout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("Name");
      toast("Logout Sucessfull");
      state.toggle = false;
    },

    handleRegister: (state, { payload }) => {
      localStorage.removeItem("name");
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload?.status === 200) {
          state.isloggedIn = true;
          localStorage.setItem("name", payload?.data?.first_name);
          state.redirectToo = "/login";
          toast(payload?.message);
          toast.success(payload?.message, {
            type: "success",
            hideProgressBar: true,
            autoClose: 2500,
          });
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(login.pending, (state, action) => {
        state.login_status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);

        if (payload?.status) {
          console.log(payload.message);
          state.redirectTo = "/doctors";
          state.toggle = true;
          // state.username=payload.
          // alert(payload?.message);
          toast.success(payload?.message, {
            type: "success",
            hideProgressBar: true,
            autoClose: 2500,
          });
          localStorage.setItem("token", payload?.token);
        } else {
          alert("Try again!");
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        // alert("Some error occured with the server!");
        toast.error("Some error occured with the server!");
      });
  },
});
export const {
  reset_redirectToo,
  handleRegister,
  reset_redirectTo,
  check_token,
  handleLoggedout,
  redirectTo,
} = AuthSlice.actions;

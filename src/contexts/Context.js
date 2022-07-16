import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyContext = createContext();
export const API_SERVER = process.env.api_v1;
export const DNS_SERVER = process.env.dns_v1;
export const API_EXT = process.env.api_ext_v1;

export default function MyContextProvider({ children }) {
  const Axios = axios.create({
    baseURL: API_EXT,
  });

  const initialState = {
    isAuth: undefined,
    showLogin: undefined,
  };

  const [state, setState] = useState({ initialState });

  useEffect(() => {
    setState({
      isAuth: localStorage.getItem("loginToken") == null ? false : true,
      showLogin: localStorage.getItem("loginToken") == null ? false : true,
    });
  }, []);

  const listfetchUsers = async (page, size) => {
    const dataJson = await Axios.get(`user?limit=${size}&page=${page}`, {
      headers: {
        "app-id": "622f1d7b5b66a58cc5964b32",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });

    if (dataJson.data) {
      return dataJson.data;
    } else {
      return dataJson.response.data;
    }
  };

  return (
    <MyContext.Provider
      value={{
        listfetchUsers,
        rootState: state,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

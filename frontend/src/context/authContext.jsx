import  { createContext, useEffect, useReducer } from "react";

const getStorageItem = (key) => {
  const item = localStorage.getItem(key);
  if (item === null || item === "null" || item === "undefined") {
    return null;
  }
  return item;
};

const initialState = {
  user: getStorageItem("user") ? JSON.parse(getStorageItem("user")) : null,
  token: getStorageItem("token"),
  isAdmin: getStorageItem("isAdmin") === "true",
  isUserLoggedIn: !!getStorageItem("token"),
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        isAdmin: null,
        isUserLoggedIn: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
        isUserLoggedIn: true,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        isAdmin: null,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }

    // Nếu có token thì lưu, không thì xóa (TRÁNH lưu chuỗi "null")
    if (state.token) {
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("token");
    }

    // isAdmin lưu dưới dạng chuỗi "true" / "false"
    localStorage.setItem("isAdmin", String(state.isAdmin));
    
    // isUserLoggedIn cũng tương tự
    localStorage.setItem("isUserLoggedIn", String(!!state.token));

    console.log("Sync state to localStorage done");
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAdmin: state.isAdmin,
        isUserLoggedIn: state.isUserLoggedIn,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

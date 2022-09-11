import { configureStore } from "@reduxjs/toolkit";
// import addItem from "./reducers/addItem";

import rootReducers from "./reducers";

export const store = configureStore({reducer : rootReducers});

export default store;